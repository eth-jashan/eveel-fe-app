import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import Homescreen from "../Screen/Home/Homescreen";
import CarListScreen from "../Screen/Home/carListScreen";
import BottomNav from "./BottomStack";
import CarProfilePage from "../Screen/Home/CarProfileScreen";
import CategoryScreen from "../Screen/Home/CategoryListScreen";
import pumpLocation from "../Screen/Pump/Pumpscreen";
import PumpSearchScreen from "../Screen/Pump/pumpSearchScreen";
import PhotoSlideScreen from "../Screen/Home/PhotoSlideScreen";
import CarCompareScreen from "../Screen/Home/CarCompareScreen";
import DrawerContent from "../Screen/Home/DrawerProfileContent";
import { Dimensions } from "react-native";

const HomeNav = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeNav.Screen component={BottomNav} name="Tab" />
      <HomeNav.Screen component={CarListScreen} name="carlist" />
      <HomeNav.Screen component={CarProfilePage} name="CarProfile" />
      <HomeNav.Screen component={CarCompareScreen} name="CarCompare" />
      <HomeNav.Screen component={CategoryScreen} name="Category" />
      <HomeNav.Screen component={pumpLocation} name="PumpScreen" />
      <HomeNav.Screen component={PumpSearchScreen} name="PumpSearch" />
      <HomeNav.Screen component={PhotoSlideScreen} name="SlideScreen" />
    </HomeNav.Navigator>
  );
};

const HomeDrawerNav = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <HomeDrawerNav.Navigator
      screenOptions={{
        headerShown:false,
        drawerPosition: "right",
        drawerType: "front",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <HomeDrawerNav.Screen name="Home" component={HomeStack} />
    </HomeDrawerNav.Navigator>
  );
};

export default HomeDrawer;
