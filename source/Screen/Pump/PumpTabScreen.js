import { useFocusEffect } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./PumpStyles/PumpTabScreenStyles";
import * as Location from "expo-location";
const PumpTabScreen = (props) => {
  const [go, setGo] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      //console.log(location);
      setLocation(location);
    })();
  }, []);
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
  return (
    <View style={styles.screen}>
      {!errorMsg && <Text style={styles.title}>Loading...</Text>}
      {errorMsg && <Text style={styles.title}>{errorMsg}</Text>}
    </View>
  );
};

export default PumpTabScreen;
