import { useFocusEffect } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./PumpStyles/PumpTabScreenStyles";
const PumpTabScreen = (props) => {
  useFocusEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("PumpScreen");
    }, 3000);
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

export default PumpTabScreen;
