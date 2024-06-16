import { Tabs } from "expo-router";
import { useState } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { DailyChain } from "@/service/DailyChain";
import ChainContext from "@/contexts/ChainContext";
import DeviceData from "@/service/DeviceData";
import Content from "@/service/Content";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const dailyChain = DailyChain.getDailyChain();
  const [chain, setChain] = useState(dailyChain);

  return (
    <ChainContext.Provider value={{ chain, setChain, dailyChain }}>
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
          name="content/[url]"
          // getId={() => Content.getContentUrl(chain)}
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
