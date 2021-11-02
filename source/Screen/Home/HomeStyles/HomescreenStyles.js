import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../assets/Color";
const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    backgroundColor: Color.black,
    flex: 1,
  },
  heading: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  profile: { width: 50, height: 50, alignSelf: "center" },
  screenscroll: { paddingBottom: 100 },
  TitleView: { margin: 15, paddingVertical: 10 },
  welcome: { fontSize: 28, color: Color.white, fontFamily: "bold" },
  slogan: {
    fontSize: 24,
    color: Color.white,
    fontWeight: "bold",
    // paddingTop: 10,
  },
  title: { fontSize: 32, color: Color.lightgreen, fontFamily: "bold" },
});

export default styles;
