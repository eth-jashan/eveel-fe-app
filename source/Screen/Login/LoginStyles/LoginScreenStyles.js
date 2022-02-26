import React from "react";
import Color from "../../../../assets/Color";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  screen: {
    height: height,
    width: width,
    backgroundColor: "black",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  image: {
    alignSelf: "center",
    maxWidth: 300,
    height: 300,
  },
  features: {
    fontFamily: "black",
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  FeatureSection: { alignSelf: "center" },
  FeatureSeparation: { fontFamily: "black", fontSize: 25, color: "#1ec0af" },
  imageSize: { width: "100%", height: "100%" },
  loginSection: { width: "100%", alignSelf: "center" },
  loginButtonFaceBook: {
    alignItems: "center",
    width: "94%",
    backgroundColor: Color.darkgreen,
    borderRadius: 12,
    padding: 12,
    alignSelf: "center",
  },
  loginButtonGoogle: {
    marginVertical: 16,
    alignItems: "center",
    width: "94%",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#d24736",
    alignSelf: "center",
  },
  LoginArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  LoginText: {
    color: "white",
    fontFamily: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
});

export default styles;
