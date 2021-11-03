import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomStack";
import { NavigationContainer } from "@react-navigation/native";
import CarListScreen from "../Screen/Home/carListScreen";
import HomeStack from "./HomeStack";

const FlowStack = createStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <FlowStack.Navigator screenOptions={{ headerShown: false }}>
        <FlowStack.Screen component={HomeStack} name="Home" />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;