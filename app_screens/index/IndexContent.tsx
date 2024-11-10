import { useContext } from "react";
import { Link } from "expo-router";

import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

import GlobalContext from "@/contexts/GlobalContext";
import Device from "@/functions/Device";

import Styles from "@/constants/Styles";
import Page from "@/functions/Page";
import { ColorTheme } from "@/functions/ColorTheme";

// import mapSources from "@/functions/mapping/SourceMapper"
// import createSiteMap from "@/functions/sitemap/SiteMapper";

export default function IndexContent() {
  // mapSources();
  // createSiteMap();

  const linkTextColor = ColorTheme.getColor("link");
  const linkTextStyle = { color: linkTextColor, fontFamily: "SofiaSemiBold" };

  const { dailyKeychain } = useContext(GlobalContext);

  return (
    <>
      <ThemedView>
        <ThemedText type="title">Мір вам!</ThemedText>
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
        <ThemedText>{"\u2b58   "} Евангелле</ThemedText>
        <ThemedText>{"\u2b58   "} Кнігі Апосталаў</ThemedText>
        <ThemedText>{"\u2b58   "} Псалтыр</ThemedText>
        <ThemedText>{"\u2b58   "} Малітоўнік</ThemedText>
        <ThemedText>{"\u2b58   "} Акафісты</ThemedText>
        <ThemedText>{"\u2b58   "} Богаслужэнні</ThemedText>
        <ThemedText>{"\u2b58   "} Дзіцячыя кнігі</ThemedText>
        <ThemedText>{"\u2b58   "} Пабожныя спевы</ThemedText>
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
          Таму намоўчкі, пры адкрыцці{` ${Device.getAppKind()}, `}
          Змест адлюстроўвае менавіта сённяшняе, чарговае{", "}
          <Link href={Page.getUrl(dailyKeychain)}>
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
