import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { DeviceData } from "@/service/DeviceData";
import { styles } from "@/constants/styles";

export function IndexContent() {
  return (
    <>
      <ThemedView>
        <ThemedText type="title">Хрыстос</ThemedText>
        <ThemedText type="title">уваскрос!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.paragraph}>
        <ThemedText type="subtitle">Аб "Дабравесці"</ThemedText>
        <ThemedText>
          Шчыра рады бачыць вас на старонках праекта{" "}
          <ThemedText type="semiBold">"Дабравесце"</ThemedText>.
        </ThemedText>
        <ThemedText>
          Праект створаны і развіваецца Брацтвам ў гонар Віленскіх мучанікаў пры
          Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай Праваслаўнай
          Царквы.
        </ThemedText>
        <ThemedText>
          Сабор знаходзіцца на Нямізе, на вуліцы Ракаўская, дом 4.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.paragraph}>
        <ThemedText type="subtitle">Пра пераклад</ThemedText>
        <ThemedText>
          Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
          Праваслаўнай Царквы.
        </ThemedText>
        <ThemedText>Тэкст Евангелля чытае Юрый Жыгамонт.</ThemedText>
        <ThemedText>
          Малітоўнік — у перакладзе протаіерэя Сергія Гардуна.
        </ThemedText>
        <ThemedText>Малітвы агучаны аўтарам перакладу.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.paragraph}>
        <ThemedText type="subtitle">Нашы крыніцы</ThemedText>
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

      <ThemedView style={styles.paragraph}>
        <ThemedText type="subtitle">Евангелле штодня</ThemedText>
        <ThemedText>
          Многія з нас чытаюць Евангелле штодня — зазвычай, па адным раздзеле.
        </ThemedText>
        <ThemedText>
          І мы штодзённа гартаем старонкі Дабравесця для таго, каб супольна з
          вамі прачытаць за год усе чатыры Евангеллі роўна чатыры разы.
        </ThemedText>
        <ThemedText>
          Таму намоўчкі, пры адкрыцці{" "}
          {DeviceData.isWeb() ? "сайта" : "дачынення"}
          {", "} укладка Змест адлюстроўвае менавіта сённяшняе чарговае{" "}
          <Link href="/">
            <ThemedText type="link">Евангелле дня</ThemedText>
          </Link>
          .
        </ThemedText>
      </ThemedView>
    </>
  );
}
