import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "../Screen/Home/Homescreen";
import CarListScreen from "../Screen/Home/carListScreen";
import BottomNav from "./BottomStack";
import CarProfilePage from "../Screen/Home/CarProfileScreen";
import CategoryScreen from "../Screen/Home/CategoryListScreen";
import pumpLocation from "../Screen/Pump/Pumpscreen";
import PumpSearchScreen from "../Screen/Pump/pumpSearchScreen";
import PhotoSlideScreen from "../Screen/Home/PhotoSlideScreen";
import CarCompareScreen from "../Screen/Home/CarCompareScreen";
import DrawerContent from "../Screen/Drawer/DrawerProfileContent";
import LikedCarList from "../Screen/Drawer/LikedCarList";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeNav = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeNav.Navigator screenOptions={{}}>
      <HomeNav.Screen
        component={BottomNav}
        name="Tab"
        options={{ headerShown: false }}
      />
      <HomeNav.Screen
        component={CarListScreen}
        name="carlist"
        options={{ headerShown: false }}
      />
      <HomeNav.Screen component={CarProfilePage} name="CarProfile" />
      <HomeNav.Screen
        component={CarCompareScreen}
        name="CarCompare"
        options={{ headerShown: false }}
      />
      <HomeNav.Screen
        component={CategoryScreen}
        name="Category"
        options={{ headerShown: false }}
      />
      <HomeNav.Screen
        component={pumpLocation}
        name="PumpScreen"
        options={{ headerShown: false }}
      />
      <HomeNav.Screen
        component={PumpSearchScreen}
        name="PumpSearch"
        options={{ headerShown: false }}
      />
      <HomeNav.Screen component={PhotoSlideScreen} name="SlideScreen" />
      <HomeNav.Screen
        component={LikedCarList}
        name="LikedCars"
        options={{
          headerShown: false,
        }}
      />
    </HomeNav.Navigator>
  );
};

const HomeDrawerNav = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <HomeDrawerNav.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerType: "front",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <HomeDrawerNav.Screen name="HomeDrawer" component={HomeStack} />
    </HomeDrawerNav.Navigator>
  );
};

export default HomeDrawer;
