import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../Vallet/screens/MainScreen";
import Incident from "../Vallet/screens/Incident";
import LandingPage from "../Vallet/screens/LandingPage";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Setting from "../Vallet/screens/Setting";
import Notification from "../Vallet/screens/Notification";
import IncidentReports from "../Vallet/screens/IncidentReports";
import * as Font from "expo-font";
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../assets/CircularStd.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Incident Reports") {
            iconName = focused ? "filetext1" : "filetext1";
          } else if (route.name === "Notification") {
            iconName = focused ? "bells" : "bells";
          } else if (route.name === "Settings") {
            iconName = focused ? "setting" : "setting";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontFamily: "CircularStd",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Incident Reports"
        component={IncidentReports}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
