import React from "react";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomStack";
import { NavigationContainer } from "@react-navigation/native";
import CarListScreen from "../Screen/Home/carListScreen";
import HomeStack from "./HomeStack";
import LoginScreen from "../Screen/Login/LoginScreen";
import StartupScreen from "../Screen/StartupScreen";
import NumberVerification from "../Screen/Login/NumberVerificationScreen";
import VehicleSelectScreen from "../Screen/VehicleSelect/VehicleSelectScreen";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const FlowStack = createStackNavigator();
const AppNav = () => {
  //data passed through the Link
  const [data, setData] = useState(null);
  console.log(prefix);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Startup: "Startup",
      },
    },
  };

  //handling DeepLinking
  const handleDeepLink = (event) => {
    let data = Linking.parse(event.url);
    setData(data);
  };

  useEffect(() => {
    const getInitialURL = async () => {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) {
        setData(Linking.parse(initialURL));
      }
    };
    Linking.addEventListener("url", handleDeepLink);
    if (!data) {
      getInitialURL();
    }
    return () => {
      Linking.removeEventListener("url");
    };
  }, []);
  return (
    <NavigationContainer linking={linking}>
      <FlowStack.Navigator screenOptions={{ headerShown: false }}>
        <FlowStack.Screen component={StartupScreen} name="Startup" />
        <FlowStack.Screen component={LoginScreen} name="Login" />
        <FlowStack.Screen
          component={VehicleSelectScreen}
          name="SelectVehicle"
        />
        <FlowStack.Screen component={NumberVerification} name="Phone" />
        <FlowStack.Screen component={HomeStack} name="Home" />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
