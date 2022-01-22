import React from "react";
import { StyleSheet, Animated, Dimensions } from "react-native";
import Color from "../../../../assets/Color";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  Screen: {
    width: width,
    height: height,
    backgroundColor: Color.black,
  },
  gradient: { position: "absolute", height: 400, right: 0, left: 0, top: 0 },
  Scrolling: { marginTop: 200 },
  container: {
    justifyContent: "center",
    alignSelf: "center",
  },
  ImageGrad: {
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  img: { width: "80%", height: "50%", alignSelf: "center" },
  Title: {
    textAlign: "center",
    fontFamily: "black",
    fontSize: 30,
    color: "white",
    alignSelf: "center",
    marginVertical: 16,
  },
  button: {
    marginVertical: 80,
    padding: 10,
    width: "80%",
    backgroundColor: "#1ec0af",
    borderRadius: 20,
    alignSelf: "center",
  },
  ButtonText: {
    fontFamily: "semibold",
    alignSelf: "center",
    fontSize: 18,
    color: Color.darkgreen,
  },
  BrandView: {
    backgroundColor: Color.darkgrey,
    overflow: "hidden",
    height: height / 1.8,
    margin: 20,
    borderRadius: 20,
    padding: 10,
    shadowColor: "black",
    elevation: 2,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
});

export default styles;
