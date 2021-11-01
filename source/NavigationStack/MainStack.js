import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomStack";
import { NavigationContainer } from "@react-navigation/native";

const FlowStack = createStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <FlowStack.Navigator screenOptions={{ headerShown: false }}>
        <FlowStack.Screen name="Tab" component={BottomNav} />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
