import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import CategorySelection from "../../Component/Specific/categorySelection";
import HomeBanner from "../../Component/Specific/Homebanner";
import color from "../../../assets/Color";
import BrandScroll from "../../Component/Specific/BrandScroll";
import CarScroll from "../../Component/Specific/CarScroll";
const Homescreen = (props) => {
  return (
    <View
      style={{
        paddingTop: 25,
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <Image
          source={require("../../../assets/Images/header-logo-white.png")}
          style={{
            height: 50,
            width: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Image
          source={require("../../../assets/Images/Ellipse.png")}
          style={{ width: 50, height: 50, alignSelf: "center" }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ margin: 15, paddingVertical: 10 }}>
          <Text
            style={{ fontSize: 28, color: 'white', fontFamily: "bold" }}
          >
            Good afternoon, Jashan
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              fontWeight: "bold",
              // paddingTop: 10,
            }}
          >
            Let's find the perfect
          </Text>
          <Text
            style={{ fontSize: 32, color: 'white', fontFamily: "bold" }}
          >
            <Text style={{ color: color.lightgreen }}>
              Electric Vehicle ⚡{" "}
            </Text>
            for you
          </Text>
        </View>
        <HomeBanner />
        <CategorySelection />
        <BrandScroll />
        <CarScroll />
      </ScrollView>
    </View>
  );
};

export default Homescreen;
