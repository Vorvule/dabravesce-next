import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { DeviceData } from "@/service/DeviceData";

import { Styles } from "@/constants/Styles";
import { useThemeColor } from "@/hooks/useThemeColor";

import { useContext } from "react";
import { ChainContext } from "@/contexts/ChainContext";
import Content from "@/service/Content";

export function IndexContent() {
  const linkTextColor = useThemeColor({}, "tint");
  const linkTextStyle = { color: linkTextColor, fontFamily: "SofiaSemiBold" };

  const { dailyChain } = useContext(ChainContext);
  const dailyContentUrl = Content.getContentUrl(dailyChain);

  return (
    <>
      <ThemedView>
        <ThemedText type="title">Хрыстос уваскрос!</ThemedText>
      </ThemedView>

      <ThemedView style={Styles.paragraph}>
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

      <ThemedView style={Styles.paragraph}>
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

      <ThemedView style={Styles.paragraph}>
        <ThemedText type="subtitle">Нашы крыніцы</ThemedText>
        <ThemedText>У меню "Дабравесця" вы знойдзеце:</ThemedText>
        <ThemedText>{"\u2b58 "} Евангелле — тэксты і аўдыё</ThemedText>
        <ThemedText>{"\u2b58 "} Кнігі Апосталаў</ThemedText>
        <ThemedText>{"\u2b58 "} Псалтыр</ThemedText>
        <ThemedText>{"\u2b58 "} Малітоўнік</ThemedText>
        <ThemedText>{"\u2b58 "} Акафісты</ThemedText>
        <ThemedText>{"\u2b58 "} Богаслужэнні</ThemedText>
        <ThemedText>{"\u2b58 "} Хрысціянскія кнігі</ThemedText>
        <ThemedText>{"\u2b58 "} Пабожныя спевы — аўдыё і словы</ThemedText>
        <ThemedText>і іншыя крыніцы духоўнага развіцця.</ThemedText>
      </ThemedView>

      <ThemedView style={Styles.paragraph}>
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
          Змест адлюстроўвае менавіта сённяшняе, чарговае{", "}
          <Link href={dailyContentUrl}>
            <ThemedText type="default" style={linkTextStyle}>
              Евангелле дня
            </ThemedText>
          </Link>
          .
        </ThemedText>
      </ThemedView>
    </>
  );
}
