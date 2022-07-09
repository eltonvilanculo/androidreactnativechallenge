import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Event from "../screens/Event";
import ShowVideo from "../screens/ShowVideo";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        component={Event}
    
      />
      <Stack.Screen name="Video" component={ShowVideo} />
    </Stack.Navigator>
  );
}
