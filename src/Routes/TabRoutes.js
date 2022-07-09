import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Event from "../screens/Event";
import Schedule from "../screens/Schedule";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackRoutes from "./StackRoutes";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "EventsTab") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Schedule") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="EventsTab" component={StackRoutes}     options={{ headerShown: false }} />
      <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
