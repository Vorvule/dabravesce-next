import { useState } from 'react';
import { View } from 'react-native';

import { Image } from 'expo-image';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Device from '@/functions/Device';
import Web from '@/functions/Web';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedText from '@/components/ThemedText';

import Search, { SearchResult } from '@/functions/Search';
import Styles from '@/constants/styles/common.styles';
import SearchResults from '@/app_screens/search/search.results';
import SearchInput from '@/app_screens/search/search.input';

export default function SearchScreen() {
  const imageSource = require('@/assets/images/header/analoy.png');
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    setSearchResults(Search.getInSources(searchText));
  };

  const { centered } = Styles;

  return (
    <>
      {Device.platformIsWeb() && (
        <Head>
          <title>Дабравесце ~ Пошук</title>
          <meta name='description' content={Web.getDescription(path)} />
        </Head>
      )}

      <ParallaxScrollView headerImage={headerImage}>
        <ThemedText type='title'>Пошук</ThemedText>

        <ThemedText type='subtitle' style={centered}>
          Па змесце
        </ThemedText>

        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          onPress={handleSearch}
        />

        <ThemedText style={[centered, { paddingTop: 20 }]} type='header'>
          Вынікаў ~ {searchResults.length}
        </ThemedText>

        <View style={{ paddingBottom: 80 }}>
          <SearchResults searchResults={searchResults} />
        </View>
      </ParallaxScrollView>
    </>
  );
}
