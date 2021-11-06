import { useFocusEffect } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PumpTabScreen = (props) => {
  useFocusEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("PumpScreen");
    }, 3000);
  });
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ alignSelf: "center" }}>Loading...</Text>
    </View>
  );
};

export default PumpTabScreen;
