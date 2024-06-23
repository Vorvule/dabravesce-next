import { useState } from "react";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";

import Colors from "@/constants/Colors";
import TabBarIcon from "@/components/navigation/TabBarIcon";

import GlobalContext from "@/contexts/GlobalContext";

import Daily from "@/functions/Daily";
import Device from "@/functions/Device";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  const dailyKeychain = Daily.getDailyKeychain();

  const [keychain, setKeychain] = useState(dailyKeychain);

  return (
    <GlobalContext.Provider
      value={{
        keychain,
        setKeychain,
        dailyKeychain,
      }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
          name="sources"
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
          name="content/[url]"
          options={{
            title: "Змест",
            // href: Content.getUrl(keychain),
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
