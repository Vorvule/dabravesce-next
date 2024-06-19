import { useState } from "react";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";

import Colors from "@/constants/Colors";
import TabBarIcon from "@/components/navigation/TabBarIcon";

import ChainContext from "@/contexts/ChainContext";
import Content from "@/service/Content";

import Daily from "@/service/Daily";
import DeviceData from "@/service/DeviceData";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const dailyChain = Daily.getDailyChain();
  const [chain, setChain] = useState(dailyChain);

  const dailyUrl = Daily.getDailyUrl();
  const [url, setUrl] = useState(dailyUrl);
  console.log("Layout Url: " + url);

  return (
    <ChainContext.Provider
      value={{ chain, setChain, dailyChain, url, setUrl, dailyUrl }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "SofiaSemiBold",
            fontSize: DeviceData.wideScreen() ? 17 : 11,
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
            href: Content.getContentUrl(chain),
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
