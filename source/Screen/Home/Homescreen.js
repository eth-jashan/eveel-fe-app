import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import CategorySelection from "../../Component/Utils/HomeScreenUtils/categorySelectionUtil";
import HomeBanner from "../../Component/Utils/HomeScreenUtils/HomebannerUtil";

import BrandScroll from "../../Component/Utils/HomeScreenUtils/BrandScrollUtil";
import CarScroll from "../../Component/Utils/HomeScreenUtils/CarScrollUtil";
import Color from "../../../assets/Color";
const Homescreen = (props) => {
  return (
    <View
      style={{
        paddingTop: 25,
        backgroundColor: Color.black,
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
            style={{ fontSize: 28, color: Color.white, fontFamily: "bold" }}
          >
            Good afternoon, Jashan
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: Color.white,
              fontWeight: "bold",
              // paddingTop: 10,
            }}
          >
            Let's find the perfect
          </Text>
          <Text
            style={{ fontSize: 32, color: Color.white, fontFamily: "bold" }}
          >
            <Text style={{ color: Color.lightgreen }}>
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
