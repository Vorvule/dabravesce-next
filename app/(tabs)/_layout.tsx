import { useState } from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";

import useThemeColor from "@/hooks/useThemeColor";
import TabBarIcon from "@/components/navigation/TabBarIcon";
import GlobalContext from "@/contexts/GlobalContext";

import Daily from "@/functions/Daily";
import Device from "@/functions/Device";
import Icon from "@/functions/TabBar";

export default function TabLayout() {
  const linkColor = useThemeColor({}, "link");
  const greyColor = useThemeColor({}, "grey");
  const backgroundColor = useThemeColor({}, "background");

  const dailyKeychain = Daily.getDailyKeychain();

  const [keychain, setKeychain] = useState(dailyKeychain);
  const updateKeychain = (newKeychain: number[]) => setKeychain(newKeychain);

  const contextValue = { keychain, updateKeychain, dailyKeychain };

  const style = StyleSheet.create({
    tabBar: {
      borderTopWidth: 0,
      borderRightWidth: 0,
      backgroundColor: backgroundColor,
    },
    tabBarItem: {
      borderTopWidth: 2,
      borderTopColor: "grey",
      borderRightWidth: 2,
      borderRightColor: "grey",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderLeftWidth: 2,
      borderLeftColor: backgroundColor,
      backgroundColor: backgroundColor,
    },
    tabBarLabel: {
      fontFamily: "SofiaSemiBold",
      fontSize: Device.windowIsWide() ? 17 : 11,
    },
  });

  return (
    <GlobalContext.Provider value={contextValue}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: style.tabBar,
          tabBarItemStyle: style.tabBarItem,
          tabBarLabelStyle: style.tabBarLabel,
          tabBarActiveTintColor: linkColor,
          tabBarInactiveTintColor: greyColor,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Дабравесце",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={Icon.getName("index", focused)} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "Крыніцы",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={Icon.getName("menu", focused)} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="page/[slugchain]"
          options={{
            title: "Старонка",
            // tabBarItemStyle: style.lastTabBarItem,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={Icon.getName("", focused)} color={color} />
            ),
          }}
        />
      </Tabs>
    </GlobalContext.Provider>
  );
}
