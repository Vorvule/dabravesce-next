import { useContext } from 'react';
import { Link } from 'expo-router';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { GlobalContext } from '@/contexts/GlobalContext';
import Device from '@/functions/Device';
import Styles from '@/constants/styles/common.styles';
import Page from '@/functions/Page';
import { ColorTheme } from '@/functions/ColorTheme';
import { StyleProp, TextStyle } from 'react-native';

// import mapSources from "@/functions/mapping/SourceMapper"
// import createSiteMap from "@/functions/sitemap/SiteMapper";

export default function IndexContent() {
  // mapSources();
  // createSiteMap();

  const linkTextColor = ColorTheme.getColor('link');
  const linkTextStyle: StyleProp<TextStyle> = {
    color: linkTextColor,
    fontFamily: 'Vollkorn',
  };

  const { dailyKeychain } = useContext(GlobalContext);
  const tab = '       ';
  const bullet = ' \u2b58  ';

  return (
    <>
      <ThemedView>
        <ThemedText type='title'>Мір вам!</ThemedText>
      </ThemedView>

      <ThemedView style={Styles.paragraph}>
        <ThemedText type='subtitle'>"Дабравесце"</ThemedText>
        <ThemedText>
          {tab}Шчыра рады бачыць вас на старонках праекта "Дабравесце", што
          развіваецца Брацтвам у гонар Віленскіх мучанікаў пры
          Свята-Петра-Паўлаўскім саборы Беларускай Праваслаўнай Царквы.
        </ThemedText>
        <ThemedText>
          {tab}Сабор знаходзіцца ў Мінску, на Нямізе, вуліца Ракаўская, дом 4.
        </ThemedText>
      </ThemedView>

      <ThemedView style={Styles.paragraph}>
        <ThemedText type='subtitle'>Пераклад</ThemedText>
        <ThemedText>
          {tab}Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
          Праваслаўнай Царквы.
        </ThemedText>
        <ThemedText>{tab}Тэкст Евангелля чытае Юрый Жыгамонт.</ThemedText>
        <ThemedText>
          {tab}Малітоўнік — у перакладзе протаіерэя Сергія Гардуна.
        </ThemedText>
        <ThemedText>{tab}Малітвы агучаны аўтарам перакладу.</ThemedText>
      </ThemedView>

      <ThemedView style={Styles.paragraph}>
        <ThemedText type='subtitle'>Крыніцы</ThemedText>
        <ThemedText>{tab}У меню "Дабравесця" вы знойдзеце:</ThemedText>
        <ThemedText>{bullet} Евангелле</ThemedText>
        <ThemedText>{bullet} Кнігі Апосталаў</ThemedText>
        <ThemedText>{bullet} Псалтыр</ThemedText>
        <ThemedText>{bullet} Малітоўнік</ThemedText>
        <ThemedText>{bullet} Акафісты</ThemedText>
        <ThemedText>{bullet} Богаслужэнні</ThemedText>
        <ThemedText>{bullet} Дзіцячыя кнігі</ThemedText>
        <ThemedText>{bullet} Пабожныя спевы</ThemedText>
        <ThemedText>{tab}— і іншыя крыніцы духоўнага развіцця.</ThemedText>
      </ThemedView>

      <ThemedView style={Styles.paragraph}>
        <ThemedText type='subtitle'>Евангелле штодня</ThemedText>
        <ThemedText>
          {tab}Многія з нас чытаюць Евангелле штодня — зазвычай, па адным
          раздзеле.
        </ThemedText>
        <ThemedText>
          {tab}І мы штодзённа гартаем старонкі Дабравесця для таго, каб супольна
          з вамі прачытаць за год усе чатыры Евангеллі роўна чатыры разы.
        </ThemedText>
        <ThemedText>
          {tab}Таму намоўчкі, пры адкрыцці{` ${Device.getAppKind()}, `}
          Старонка адлюстроўвае менавіта сённяшняе, чарговае{', '}
          <Link href={Page.getUrl(dailyKeychain)}>
            <ThemedText style={linkTextStyle}>Евангелле дня</ThemedText>
          </Link>
          .
        </ThemedText>
      </ThemedView>
    </>
  );
}
