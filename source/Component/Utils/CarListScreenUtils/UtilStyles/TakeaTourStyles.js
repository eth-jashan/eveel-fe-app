import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import Color from "../../../../../assets/Color";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  screen: {
    top: Platform.OS === "android" ? height / 5 : height / 4,
    alignItems: "center",
  },
  Button: {
    //top: Platform.OS === "android" ? height / 5 : height / 4,
    backgroundColor: Color.lightgreen,
    width: "90%",
    borderRadius: 12,
    alignSelf: "center",
  },
  Buttontext: {
    fontSize: 18,
    color: Color.darkgreen,
    // margin: 10,
    padding: 8,
    alignSelf: "center",
    fontFamily: "semibold",
  },
  ItemStyle: {
    justifyContent: "center",
    // overflow: "hidden",
    // backgroundColor: "transparent",
    // padding: 8,
  },
});

export default styles;
