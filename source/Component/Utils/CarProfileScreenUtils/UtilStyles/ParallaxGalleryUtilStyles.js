import React from "react";
import Color from "../../../../../assets/Color";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  component: {
    width: width * 0.8,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  Img: { width: width * 0.8, height: height * 0.4 },
  Index: { fontSize: 30, color: Color.lightgreen, fontFamily: "black" },
  Title: { fontSize: 24, fontFamily: "black", color: Color.white },
});

export default styles;
