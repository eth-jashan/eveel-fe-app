import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import CategorySelection from "../../Component/Utils/HomeScreenUtils/categorySelectionUtil";
import HomeBanner from "../../Component/Utils/HomeScreenUtils/HomebannerUtil";

import BrandScroll from "../../Component/Utils/HomeScreenUtils/BrandScrollUtil";
import CarScroll from "../../Component/Utils/HomeScreenUtils/CarScrollUtil";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/HomescreenStyles";
import { useNavigationState } from "@react-navigation/core";
import { fetchCompany } from "../../Store/action/company";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarModel } from "../../Store/action/car";
import HomeScreenLoadingUtil from "../../Component/Utils/HomeScreenUtils/HomeScreenLoadingUtil";
import { LoggedInUser } from "../../Store/action/auth";
const Homescreen = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  //console.log("User===>", user);
  const [loading, setLoading] = useState(true);

  const homeScreenData = () => {
    dispatch(fetchCompany());
    dispatch(fetchCarModel());
  };

  useEffect(() => {
    setLoading(true);
    homeScreenData();
    setLoading(false);
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      {loading && <HomeScreenLoadingUtil />}
      {!loading && (
        <View style={styles.LoadedScreen}>
          <View style={styles.heading}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/Images/eveels-logo.png")}
                style={styles.logo}
              />
              <Image
                source={require("../../../assets/Images/eveels-words.png")}
                style={styles.logo2}
              />
            </View>
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
              <Text style={styles.welcome}>
                Good afternoon, {user.first_name}
              </Text>
              <Text style={styles.slogan}>Let's find the perfect</Text>
              <Text style={styles.title}>Electric Vehicle ⚡ </Text>
            </View>
            <HomeBanner />
            <CategorySelection />
            <BrandScroll />
            <CarScroll />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Homescreen;
