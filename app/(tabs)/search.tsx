import { useState } from 'react';
import { Pressable, StyleProp, TextInput, View } from 'react-native';

import { Image } from 'expo-image';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useColorScheme } from '@/hooks/useColorScheme';

import Device from '@/functions/Device';
import Web from '@/functions/Web';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedText from '@/components/ThemedText';
import ThemedLink from '@/components/ThemedLink';

import Search, { SearchResult } from '@/functions/Search';
import Styles from '@/constants/styles/common.styles';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function SearchScreen() {
  const imageSource = require('@/assets/images/header/analoy.png');
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();

  const theme = useColorScheme() ?? 'dark';
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    setSearchData(Search.getInSources(searchText));
  };

  const styles: StyleProp<any> = {
    input: {
      height: 60,
      marginTop: 20,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 30,
      paddingVertical: 10,
      paddingLeft: 25,
      paddingRight: 60, // Важна: месца для кнопкі
      fontFamily: 'Monomakh',
      fontSize: 22,
      color: useThemeColor({}, 'text'),
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    searchButton: {
      position: 'absolute',
      right: 5,
      top: 25,
      width: 50,
      height: 50,
      borderColor: 'grey',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'teal',
    },
    resultLink: {
      paddingVertical: 24,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
    },
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

        <View>
          <TextInput
            style={styles.input}
            onChangeText={setSearchText}
            placeholder='Пошук па змесце'
            placeholderTextColor='grey'
            value={searchText}
          />

          <Pressable style={styles.searchButton} onPress={handleSearch}>
            <MaterialIcons name='search' size={30} color='white' />
          </Pressable>
        </View>

        <ThemedText style={[centered, { paddingTop: 20 }]} type='header'>
          Вынікаў ~ {searchData.length}
        </ThemedText>

        <View style={{ paddingBottom: 80 }}>
          {searchData.map((item) => (
            <ThemedLink
              key={item.slugChain}
              style={styles.resultLink}
              href={`/page/${item.slugChain}`}
              type='default'
              text={item.nameChain}
            />
          ))}
        </View>
      </ParallaxScrollView>
    </>
  );
}
