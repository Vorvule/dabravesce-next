import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { CoreScreen } from "./Core/CoreScreen";
import { MenuScreen } from "./Menu/MenuScreen";
import { InfoScreen } from "./Info/InfoScreen";

import { DailyKeys } from "./service/DailyKeys";
import { DeviceData } from "./service/DeviceData";
import { ChainContext } from "./contexts/ChainContext";

const BottomTab = createBottomTabNavigator();

export default function AppNavigation() {
  const [chain, setChain] = useState(DailyKeys.getDailyKeys());

  return (
    <ChainContext.Provider value={{ chain: chain, setChain: setChain }}>
      <BottomTab.Navigator
        initialRouteName="Меню"
        screenOptions={{
          // headerShown: false,
          headerTitleStyle: [
            // styles.tabBarLabelStyle,
            { color: "teal", fontSize: DeviceData.fontSize(18) },
          ],
          headerTitleAlign: "center",

          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "#666666",
          // tabBarLabelStyle: styles.tabBarLabelStyle, // fontFamily: "comfortaa-regular"
        }}
      >
        <BottomTab.Screen
          name="Меню"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="menu" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Тэкст"
          component={CoreScreen}
          initialParams={{ chain }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="book" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Інфо"
          component={InfoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="info" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </ChainContext.Provider>
  );
}
