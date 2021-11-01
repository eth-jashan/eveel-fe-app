import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../Screen/Home/Homescreen";
import CarListScreen from "../Screen/Home/carListScreen";
import BottomNav from "./BottomStack";

const HomeNav = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeNav.Screen component={BottomNav} name="Tab" />
      <HomeNav.Screen component={CarListScreen} name="carlist" />
      
    </HomeNav.Navigator>
  );
};

export default HomeStack;
