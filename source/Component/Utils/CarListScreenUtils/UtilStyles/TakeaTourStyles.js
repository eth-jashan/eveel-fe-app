import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  screen: { top: height / 4, alignItems: "center" },
  Button: {
    backgroundColor: Color.lightgreen,
    width: "80%",
    borderRadius: 20,
  },
  Buttontext: {
    fontSize: 24,
    color: Color.darkgreen,
    margin: 10,
    alignSelf: "center",
    fontFamily: "semibold",
  },
});

export default styles;
