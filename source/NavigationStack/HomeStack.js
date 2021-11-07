import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../Screen/Home/Homescreen";
import CarListScreen from "../Screen/Home/carListScreen";
import BottomNav from "./BottomStack";
import CarProfilePage from "../Screen/Home/CarProfileScreen";
import CategoryScreen from "../Screen/Home/CategoryListScreen";
import pumpLocation from "../Screen/Pump/Pumpscreen";
import PumpSearchScreen from "../Screen/Pump/pumpSearchScreen";

const HomeNav = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeNav.Screen component={BottomNav} name="Tab" />
      <HomeNav.Screen component={CarListScreen} name="carlist" />
      <HomeNav.Screen component={CarProfilePage} name="CarProfile" />
      <HomeNav.Screen component={CategoryScreen} name="Category" />
      <HomeNav.Screen component={pumpLocation} name="PumpScreen" />
      <HomeNav.Screen component={PumpSearchScreen} name="PumpSearch" />
    </HomeNav.Navigator>
  );
};

export default HomeStack;
