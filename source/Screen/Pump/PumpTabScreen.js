import { useFocusEffect } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./PumpStyles/PumpTabScreenStyles";
import * as Location from "expo-location";
import AnimatedLottieView from "lottie-react-native";
import loading from "../../../assets/lottie-files/lf30_editor_iqijcc4z.json";
const PumpTabScreen = (props) => {
  //constant
  const GOOGLE_MAPS_APIKEY = "AIzaSyDsDKH-37DS6ZnGY_oIi7t5YE0oAAZ-V88";
  const [go, setGo] = useState(false);

  //Input states
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  /********UseEffect*******/

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);
  // useEffect(() => {
  //   return async () => {
  //     if (location != null) {
  //       const response = await fetch(
  //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&amp;key=${GOOGLE_MAPS_APIKEY}`
  //       );
  //       const resData = await response.json();
  //       console.log(resData);
  //     }
  //   };
  // }, [location]);
  // const GotoMap = () => {
  //   props.navigation.navigate("PumpScreen", {
  //     location: location,
  //   });
  // };
  useEffect(() => {
    if (location != null) {
      props.navigation.navigate("PumpScreen", {
        location: location,
      });
    }
  }, [location]);

  /*********render*********/

  return (
    <View style={styles.screen}>
      {!errorMsg && (
        <AnimatedLottieView
          style={styles.lottie}
          autoPlay={true}
          source={loading}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      )}
      {errorMsg && <Text style={styles.title}>{errorMsg}</Text>}
    </View>
  );
};

export default PumpTabScreen;
