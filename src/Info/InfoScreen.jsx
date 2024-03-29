import * as React from "react";
import { View } from "react-native";

import Screen from "../components/Screen";

import Text from "../components/basic/Text";
import SubTitle from "../components/basic/SubTitle";
import Title from "../components/basic/Title";

import { constants } from "../constants/constants";
import { styles } from "../constants/styles";
import { IconLink } from "./IconLink";
import { DeviceData } from "../service/DeviceData";

export function InfoScreen() {
  const isWeb = DeviceData.isWeb();

  return (
    <Screen>
      <Title>Дабравесце</Title>

      <SubTitle>Спасылкі</SubTitle>

      {isWeb ? (
        <IconLink iconUrl={constants.urls.market} iconName="android">
          Дачыненне для Android
        </IconLink>
      ) : (
        <IconLink iconUrl={constants.urls.webLink} iconName="link">
          Веб-старонка
        </IconLink>
      )}
      <IconLink iconUrl={constants.urls.github} iconName="github">
        Рэпазіторый на Github
      </IconLink>
      <IconLink iconUrl={constants.urls.devMail} iconName="customerservice">
        Ліст распрацоўшчыкам
      </IconLink>
      <IconLink iconUrl={constants.urls.frateryMail} iconName="mail">
        Ліст сябрам Брацтва
      </IconLink>

      <SubTitle>Пра праект</SubTitle>
      <Text>"Дабравесце" — гэта:</Text>
      <View style={styles.listPadding}>
        <Text styling={styles.listItemMargin}>◇ Новы Запавет</Text>
        <Text styling={styles.listItemMargin}>◇ Псалтыр</Text>
        <Text styling={styles.listItemMargin}>◇ Малітоўнік</Text>
        <Text styling={styles.listItemMargin}>◇ Спевы, —</Text>
      </View>
      <Text>і іншыя духоўныя крыніцы на беларускай мове.</Text>

      <SubTitle>Стваральнікі</SubTitle>
      <Text>
        "Дабравесце" ствараецца і развіваецца Брацтвам ў гонар Віленскіх
        мучанікаў пры Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай
        Праваслаўнай Царквы, што месціцца ў сталіцы на вуліцы Ракаўская, 4.
      </Text>

      <SubTitle>Пераклады</SubTitle>
      <Text>
        Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
        Праваслаўнай Царквы. Тэкст чытае Юрый Жыгамонт.
      </Text>
      <Text>
        Малітоўнік — у перакладзе протаіерэя Сергія Гардуна. Чытае малітвы аўтар
        перакладу.
      </Text>
    </Screen>
  );
}
