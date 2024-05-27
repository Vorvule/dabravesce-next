import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { DailyKeys } from "@/service/DailyKeys";
import { ChainContext } from "@/contexts/ChainContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [chain, setChain] = React.useState(DailyKeys.getDailyKeys());

  return (
    <ChainContext.Provider value={{ chain: chain, setChain: setChain }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Дабравесце",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "albums" : "albums-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "Змест",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "folder" : "folder-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="[source]"
          options={{
            title: "Крыніцы",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "book" : "book-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </ChainContext.Provider>
  );
}
