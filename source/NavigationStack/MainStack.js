import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomStack";
import { NavigationContainer } from "@react-navigation/native";
import CarListScreen from "../Screen/Home/carListScreen";
import HomeStack from "./HomeStack";
import LoginScreen from "../Screen/Login/LoginScreen";
import StartupScreen from "../Screen/StartupScreen";
import NumberVerification from "../Screen/Login/NumberVerificationScreen";

const FlowStack = createStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <FlowStack.Navigator screenOptions={{ headerShown: false }}>
        <FlowStack.Screen component={StartupScreen} name="Startup" />
        <FlowStack.Screen component={LoginScreen} name="Login" />
        <FlowStack.Screen component={NumberVerification} name="Phone" />
        <FlowStack.Screen component={HomeStack} name="Home" />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
