import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import CategorySelection from "../../Component/Utils/HomeScreenUtils/categorySelectionUtil";
import HomeBanner from "../../Component/Utils/HomeScreenUtils/HomebannerUtil";

import BrandScroll from "../../Component/Utils/HomeScreenUtils/BrandScrollUtil";
import CarScroll from "../../Component/Utils/HomeScreenUtils/CarScrollUtil";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/HomescreenStyles";
import { useNavigationState } from "@react-navigation/core";
const Homescreen = (props) => {
  
  return (
    <View style={styles.screen}>
      <View style={styles.heading}>
        <Image
          source={require("../../../assets/Images/Ellipse-white.png")}
          style={styles.logo}
        />
        <Image
          source={require("../../../assets/Images/Ellipse.png")}
          style={styles.profile}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.screenscroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.TitleView}>
          <Text style={styles.welcome}>Good afternoon, Jashan</Text>
          <Text style={styles.slogan}>Let's find the perfect</Text>
          <Text style={styles.title}>Electric Vehicle ⚡ </Text>
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
