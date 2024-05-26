import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

import Albums from "@/screens/menu/Albums";
import { allAlbums } from "@/assets/albums/AllAlbums";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.logoImage}
        />
      }
    >
      {/* <Albums albums={allAlbums} /> */}

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Вітаем!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Пра нас</ThemedText>
        <ThemedText>
          Шчыра рады бачыць вас на старонках праекта{" "}
          <ThemedText type="defaultSemiBold">"Дабравесце"</ThemedText>.
        </ThemedText>
        <ThemedText>
          Ён створаны і развіваецца Брацтвам ў гонар Віленскіх мучанікаў пры
          Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай Праваслаўнай
          Царквы, што знаходзіцца на Нямізе, на вуліцы Ракаўская, 4.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Наш змест</ThemedText>
        <ThemedText>У меню "Дабравесця" вы знойдзеце:</ThemedText>
        <ThemedText>{"\u25cf "} Евангелле — тэксты і аўдыё</ThemedText>
        <ThemedText>{"\u25cf "} Кнігі Апосталаў</ThemedText>
        <ThemedText>{"\u25cf "} Псалтыр</ThemedText>
        <ThemedText>{"\u25cf "} Малітоўнік</ThemedText>
        <ThemedText>{"\u25cf "} Акафісты</ThemedText>
        <ThemedText>{"\u25cf "} Богаслужэнні</ThemedText>
        <ThemedText>{"\u25cf "} Хрысціянскія кнігі</ThemedText>
        <ThemedText>{"\u25cf "} Пабожныя спевы — аўдыё і словы</ThemedText>
        <ThemedText>і іншыя крыніцы духоўнага развіцця.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Евангелле штодня</ThemedText>
        <ThemedText>
          Многія з нас чытаюць Евангелле штодзень — зазвычай, па адным раздзеле.
        </ThemedText>
        <ThemedText>
          Таму і мы штодня гартаем старонкі Дабравесця для таго, каб супольна з
          вамі прачытаць за год чатыры Евангеллі роўна чатыры разы.
        </ThemedText>
        <ThemedText>
          Намоўчкі, пры адкрыцці {Platform.OS === "web" ? "сайта" : "дачынення"}
          {", "} укладка Змест адлюстроўвае менавіта
          <Link href="/">
            <ThemedText type="link"> Евангелле дня</ThemedText>
          </Link>
          .
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Пра пераклад</ThemedText>
        <ThemedText>
          Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
          Праваслаўнай Царквы. Тэкст чытае Юрый Жыгамонт.
        </ThemedText>
        <ThemedText>
          Малітоўнік — у перакладзе протаіерэя Сергія Гардуна. Чытае малітвы
          аўтар перакладу.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logoImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
    // alignSelf: "center"
  },
});
