import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { DeviceData } from "@/service/DeviceData";
import { DailyChain } from "@/service/DailyChain";

import { styles } from "@/constants/styles";
import { useThemeColor } from "@/hooks/useThemeColor";

export function IndexContent() {
  const color = useThemeColor({}, "tint");

  return (
    <>
      <ThemedView>
        <ThemedText type="title">Хрыстос уваскрос!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.paragraph}>
        <ThemedText type="subtitle">Аб "Дабравесці"</ThemedText>
        <ThemedText>
          Шчыра рады бачыць вас на старонках праекта "Дабравесце".
        </ThemedText>
        <ThemedText>
          Праект створаны і развіваецца Брацтвам у гонар Віленскіх мучанікаў пры
          Свята-Петра-Паўлаўскім саборы Беларускай Праваслаўнай Царквы.
        </ThemedText>
        <ThemedText>
          Сабор знаходзіцца ў Мінску, на Нямізе, вуліца Ракаўская, дом 4.
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
        <ThemedText>{"\u29bf "} Евангелле — тэксты і аўдыё</ThemedText>
        <ThemedText>{"\u29bf "} Кнігі Апосталаў</ThemedText>
        <ThemedText>{"\u29bf "} Псалтыр</ThemedText>
        <ThemedText>{"\u29bf "} Малітоўнік</ThemedText>
        <ThemedText>{"\u29bf "} Акафісты</ThemedText>
        <ThemedText>{"\u29bf "} Богаслужэнні</ThemedText>
        <ThemedText>{"\u29bf "} Хрысціянскія кнігі</ThemedText>
        <ThemedText>{"\u29bf "} Пабожныя спевы — аўдыё і словы</ThemedText>
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
          Таму намоўчкі, пры адкрыцці{` ${DeviceData.getAppKind()}, `}
          адлюстроўваецца Змесціва менавіта сённяшняга, чарговага{", "}
          <Link href={DailyChain.getHref()}>
            <ThemedText type="default" style={{ color: color }}>
              Евангелля дня
            </ThemedText>
          </Link>
          .
        </ThemedText>
      </ThemedView>
    </>
  );
}
