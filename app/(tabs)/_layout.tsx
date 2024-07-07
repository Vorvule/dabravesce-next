import { useState } from "react";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";

import Colors from "@/constants/Colors";
import TabBarIcon from "@/components/navigation/TabBarIcon";

import GlobalContext from "@/contexts/GlobalContext";

import Daily from "@/functions/Daily";
import Device from "@/functions/Device";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // const activeTintColor: string = Colors[colorScheme ?? "light"].tint;
  // console.log(activeTintColor);

  const dailyKeychain = Daily.getDailyKeychain();

  const [keychain, setKeychain] = useState(dailyKeychain);
  const updateKeychain = (newKeychain: number[]) => setKeychain(newKeychain);

  const contextValue = { keychain, updateKeychain, dailyKeychain };

  const style = StyleSheet.create({
    tabBarItem: {
      borderRightColor: "grey",
      borderRightWidth: 1,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
    },
    // Added:
    tabBar: {
      borderTopColor: "grey",
      borderRightWidth: 1,
      borderTopRightRadius: 8,
    },
  });

  return (
    <GlobalContext.Provider value={contextValue}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          //   tabBarInactiveBackgroundColor:
          //   Colors[colorScheme ?? "light"].background,
          tabBarItemStyle: style.tabBarItem,
          tabBarStyle: style.tabBar,
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "SofiaSemiBold",
            fontSize: Device.wideScreen() ? 17 : 11,
            // color: "#444444"
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Дабравесце",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "notifications" : "notifications-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "Крыніцы",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "library" : "library-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="page/[slugchain]"
          options={{
            title: "Старонка",
            // tabBarItemStyle: style.lastTabBarItem,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "book" : "book-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </GlobalContext.Provider>
  );
}
