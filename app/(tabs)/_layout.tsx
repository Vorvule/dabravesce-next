import { useState } from "react";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";

import Colors from "@/constants/Colors";
import TabBarIcon from "@/components/navigation/TabBarIcon";

import GlobalContext from "@/contexts/GlobalContext";

import Daily from "@/functions/Daily";
import Device from "@/functions/Device";
import { StyleSheet } from "react-native";
import Icon from "@/functions/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const dailyKeychain = Daily.getDailyKeychain();

  const [keychain, setKeychain] = useState(dailyKeychain);
  const updateKeychain = (newKeychain: number[]) => setKeychain(newKeychain);

  const contextValue = { keychain, updateKeychain, dailyKeychain };

  const style = StyleSheet.create({
    tabBar: {
      borderTopColor: "grey",
      borderRightWidth: 1,
      borderTopRightRadius: 8,
    },
    tabBarItem: {
      borderRightColor: "grey",
      borderRightWidth: 1,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
    },
    tabBarLabel: {
      fontFamily: "SofiaSemiBold",
      fontSize: Device.wideScreen() ? 17 : 11,
      // color: "#444444"
    },
  });

  const tabBarActiveTintColor = Colors[colorScheme ?? "light"].tint;

  return (
    <GlobalContext.Provider value={contextValue}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: style.tabBar,
          tabBarItemStyle: style.tabBarItem,
          tabBarLabelStyle: style.tabBarLabel,
          tabBarActiveTintColor: tabBarActiveTintColor,
          //   tabBarInactiveBackgroundColor:
          //   Colors[colorScheme ?? "light"].background,
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
