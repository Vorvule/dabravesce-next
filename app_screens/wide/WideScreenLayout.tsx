import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { eventDates } from '@/app_screens/calendar/logic/event.dates';

import appSources from '@/assets/albums/app.sources.js';
import Page from '@/functions/Page';
import AlbumList from '@/app_screens/index-menu/AlbumList';
import CalendarView from '@/app_screens/calendar/view/calendar.view';
import PageContent from '@/app_screens/content-page/PageContent';
import SearchView from '@/app_screens/search/search.view';
import IndexFooter from '@/app_screens/index-menu/IndexFooter';
import ThemedView from '@/components/ThemedView';
import ThemedLink from '@/components/ThemedLink';
import ThemedText from '@/components/ThemedText';
import PageHeader from '@/components/PageHeader';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';
import { useThemeColor } from '@/hooks/useThemeColor';
import { GlobalContext } from '@/contexts/GlobalContext';

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  sidePanel: { flex: 1, overflow: 'hidden' },
  centerPanel: { width: 800, overflow: 'hidden' },
});

function CenterPanel() {
  const pathname = usePathname();
  const { dailyKeychain, updateKeychain } = useContext(GlobalContext);
  const scrollRef = useRef<ScrollView>(null);

  const slugchain: string | null = useMemo(() => {
    return pathname.startsWith('/page/') ? pathname.slice(6) : null;
  }, [pathname]);

  const keychain: number[] = useMemo(() => {
    if (slugchain && Page.slugchainValid(slugchain)) {
      return Page.getKeychain(slugchain);
    }
    return dailyKeychain;
  }, [dailyKeychain, slugchain]);

  useEffect(() => {
    updateKeychain(keychain);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [keychain, updateKeychain]);

  const { albumName, bookName, chapter } = useMemo(
    () => Page.getContent(keychain),
    [keychain],
  );

  return (
    <ThemedView style={styles.centerPanel}>
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <PageHeader title={albumName} subtitle={bookName} />
        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          <PageContent chapter={chapter} keychain={keychain} />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

function LeftPanel() {
  const borderColor = useThemeColor({}, 'border');
  const [showSearch, setShowSearch] = useState(false);
  const gospelUrl = useDailyGospelUrl();

  return (
    <ThemedView style={[styles.sidePanel, { borderRightWidth: 1, borderRightColor: borderColor }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader
          title="Дабравесце"
          subtitle={showSearch ? 'Пошук' : 'Крыніцы'}
        />

        <Pressable onPress={() => setShowSearch(!showSearch)} >
          <ThemedText type="link" style={ { paddingTop: 24, textAlign: 'center' }} >
            {showSearch ? 'Крыніцы' : 'Пошук па змесце'}
          </ThemedText>
        </Pressable>

        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          {showSearch ? (
            <SearchView />
          ) : (
            <>
              <AlbumList albums={appSources} />
              <ThemedLink style={{ textAlign: 'center', paddingTop: 24 }} href={gospelUrl} text="Евангелле дня" />
              <IndexFooter />
            </>
          )}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

function RightPanel() {
  const borderColor = useThemeColor({}, 'border');
  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);
  return (
    <ThemedView style={[styles.sidePanel, { borderLeftWidth: 1, borderLeftColor: borderColor }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader title="Праваслаўны каляндар" subtitle={dayMonth} />
        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

export default function WideScreenLayout() {
  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>Дабравесце ~ Крыніцы і Каляндар</title>
          <meta name="description" content="Дабравесце — духоўная скарбніца" />
        </Head>
      )}

      <ThemedView style={styles.container}>
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </ThemedView>
    </>
  );
}
