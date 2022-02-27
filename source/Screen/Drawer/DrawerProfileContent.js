import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
import styles from "./Styles/DrawerProfileContentStyles";
const DrawerContent = (props) => {
  //from redux

  const likedcars = useSelector((state) => state.likedCars.likedCarList);

  //constants

  const likedCarsLength = likedcars.length;
  return (
    <View style={styles.screen}>
      {/* Profile Image render */}

      <View style={styles.ImageView}>
        <Image
          source={require("../../../assets/Images/Ellipse.png")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.changeAvatar}>
          <Text style={styles.changeAvatarText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>

      {/* Liked Car Panel */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("LikedCars", { list: likedcars });
        }}
      >
        <Text style={styles.buttonText}>{likedCarsLength}</Text>
        <Text style={styles.buttonText}>Liked Cars</Text>
      </TouchableOpacity>

      {/* Frontend UI To be changed as per requirement */}

      <View style={[styles.options, { paddingTop: 50 }]}>
        <TouchableOpacity style={styles.option}>
          <Fontisto name="bell" size={24} color={Color.lightgreen} />
          <View style={styles.alignSelf}>
            <Text style={styles.optionText}>Notifications</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Entypo name="back-in-time" size={25} color={Color.lightgreen} />
          <View style={styles.alignSelf}>
            <Text style={styles.optionText}>Delivery history</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <AntDesign name="picture" size={24} color={Color.lightgreen} />
          <View style={styles.alignSelf}>
            <Text style={styles.optionText}>Analytics</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="ios-wallet-outline"
            size={24}
            color={Color.lightgreen}
          />
          <View style={styles.alignSelf}>
            <Text style={styles.optionText}>Payouts</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="message-arrow-right-outline"
            size={24}
            color={Color.lightgreen}
          />
          <View style={styles.alignSelf}>
            <Text style={styles.optionText}>Help</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Feather name="settings" size={24} color={Color.lightgreen} />
          <View style={styles.alignSelf}>
            <Text style={styles.optionText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;
