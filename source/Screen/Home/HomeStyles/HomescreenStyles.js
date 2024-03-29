import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../assets/Color";
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Color.black },
  LoadedScreen: {
    paddingTop: 25,
    backgroundColor: Color.black,
  },
  heading: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  logo2: {
    width: 100,
    height: 50,
    alignSelf: "center",
    resizeMode: "contain",
    marginLeft: 8,
  },
  profile: { width: 50, height: 50, alignSelf: "center" },
  screenscroll: { paddingBottom: 200 },
  TitleView: { margin: 15, paddingVertical: 10 },
  welcome: { fontSize: 24, color: Color.white, fontFamily: "bold" },
  slogan: {
    fontSize: 20,
    color: Color.white,
    fontWeight: "bold",
    // paddingTop: 10,
  },
  title: { fontSize: 26, color: Color.lightgreen, fontFamily: "bold" },
  comingSoon: { paddingTop: 50 },
  lottie: { alignSelf: "center", width: 200, height: 200 },
  comingText: {
    padding: 10,
    color: Color.lightgreen,
    fontFamily: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default styles;
