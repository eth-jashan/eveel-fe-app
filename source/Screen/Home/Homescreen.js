import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  BackHandler,
  Alert,
  Platform,
} from "react-native";
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
import { fetchfeature } from "../../Store/action/feature";
const Homescreen = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const categories = useSelector((state) => state.company.companyList);

  //console.log("User===>", user);
  const [loading, setLoading] = useState(true);

  const homeScreenData = () => {
    dispatch(fetchCompany());
    dispatch(fetchCarModel());
    dispatch(fetchfeature());
  };

  useEffect(() => {
    setLoading(true);
    homeScreenData();
    setLoading(false);
  }, [dispatch]);
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go leave?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };
  //   if (Platform.OS==='android') {
  //     const backHandler = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       backAction
  //     );
  //     return () => backHandler.remove();
  //   } else {
  //     props.navigation.addListener("beforeRemove", (e) => {
  //       e.preventDefault();
  //     });
  //   }
  // }, [props.navigation]);
  return (
    <View style={styles.screen}>
      {/* {loading ? (
        <HomeScreenLoadingUtil />
      ) : ( */}
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
     
    </View>
  );
};

export default Homescreen;
