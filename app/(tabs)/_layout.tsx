import { Tabs } from "expo-router";
import { useState } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { DailyChain } from "@/service/DailyChain";
import { ChainContext } from "@/contexts/ChainContext";
import { DeviceData } from "@/service/DeviceData";

export default function TabLayout() {
  const colorScheme = useColorScheme(); 

  const [chain, setChain] = useState(DailyChain.getDailyChain());

  return (
    <ChainContext.Provider value={{ chain: chain, setChain: setChain }}>
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
          name="content/[source]"
          options={{
            title: "Змест",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "book" : "book-outline"}
                color={color}
                // onPress={() => router.push("/content/" + chain.join("-"))}
              />
            ),
          }}
        />
      </Tabs>
    </ChainContext.Provider>
  );
}
