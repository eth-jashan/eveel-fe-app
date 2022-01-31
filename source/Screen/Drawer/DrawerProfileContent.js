import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TextInput } from "react-native-paper";
import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Color from "../../../assets/Color";
import { useSelector } from "react-redux";
const DrawerContent = (props) => {
  const likedcars = useSelector((state) => state.likedCars.likedCarList);
  const likedCarsLength = likedcars.length;
  //console.log("DRAWER", likedcars.length);
  return (
    <View style={{ flex: 1, backgroundColor: Color.black }}>
      <View style={{ marginTop: 40, margin: 15, alignSelf: "center" }}>
        <Image
          source={require("../../../assets/Images/Ellipse.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <TouchableOpacity style={{ opacity: 0.5, paddingTop: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              textAlign: "center",
              fontFamily: "medium",
            }}
          >
            Change Avatar
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 50,
        }}
        onPress={() => {
          props.navigation.navigate("LikedCars", { list: likedcars });
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontFamily: "bold" }}>
          {likedCarsLength}
        </Text>
        <Text style={{ fontSize: 20, color: "white", fontFamily: "bold" }}>
          Liked Cars
        </Text>
      </TouchableOpacity>
      <View
        style={{ marginVertical: 20, marginHorizontal: 30, paddingTop: 50 }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Fontisto name="bell" size={24} color={Color.lightgreen} />
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "bold",
                color: Color.lightgreen,
                fontSize: 20,
              }}
            >
              Notifications
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Entypo name="back-in-time" size={25} color={Color.lightgreen} />
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "bold",
                color: Color.lightgreen,
                fontSize: 20,
              }}
            >
              Delivery history
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <AntDesign name="picture" size={24} color={Color.lightgreen} />
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "bold",
                color: Color.lightgreen,
                fontSize: 20,
              }}
            >
              Analytics
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Ionicons
            name="ios-wallet-outline"
            size={24}
            color={Color.lightgreen}
          />
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "bold",
                color: Color.lightgreen,
                fontSize: 20,
              }}
            >
              Payouts
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <MaterialCommunityIcons
            name="message-arrow-right-outline"
            size={24}
            color={Color.lightgreen}
          />
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "bold",
                color: Color.lightgreen,
                fontSize: 20,
              }}
            >
              Help
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Feather name="settings" size={24} color={Color.lightgreen} />
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "bold",
                color: Color.lightgreen,
                fontSize: 20,
              }}
            >
              Settings
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;