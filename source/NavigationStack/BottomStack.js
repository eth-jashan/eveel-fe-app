import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Feedscreen from "../Screen/Feed/Feedscreen";
import Homescreen from "../Screen/Home/Homescreen";
import PumpTabScreen from "../Screen/Pump/PumpTabScreen";
import SocialScreen from "../Screen/Feed/SocialScreen";

const BottomStack = createMaterialBottomTabNavigator();
const BottomNav = () => {
  return (
    <BottomStack.Navigator
      initialRouteName="Home_Bottom"
      activeColor="#00FFCC"
      labeled={false}
      barStyle={{
        backgroundColor: "#004146",
        overflow: "hidden",
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 20,
        height: 60,
        flex: 1,
      }}
      shifting={true}
    >
      {/* Home screen Panel */}

      <BottomStack.Screen
        name="Home_Bottom"
        component={Homescreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Ionicons name="ios-home" size={25} color={color} />;
          },
        }}
      />

      {/* Pump Screen Panel */}

      <BottomStack.Screen
        name="Pump"
        component={PumpTabScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={30}
                color={color}
              />
            );
          },
        }}
      />
      <BottomStack.Screen
        name="Feed"
        component={SocialScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Feather name="tv" size={25} color={color} />;
          },
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomNav;
