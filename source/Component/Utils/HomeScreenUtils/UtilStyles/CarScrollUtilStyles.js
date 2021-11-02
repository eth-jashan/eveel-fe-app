import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";
const styles = StyleSheet.create({
  headingBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  title: {
    fontFamily: "bold",
    color: Color.white,
    fontSize: 22,
    alignSelf: "center",
  },
  more: {
    fontSize: 16,
    fontFamily: "medium",
    padding: 5,
    color: Color.white,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Color.lightgreen,
    alignSelf: "center",
  },
  Box: {
    backgroundColor: Color.darkgrey,
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: 10,
    marginBottom: 40,
    borderRadius: 20,
    shadowColor: Color.grey,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  imgview: {
    shadowColor: Color.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    margin: 20,
    width: Dimensions.get("screen").width / 1.5,
    height: Dimensions.get("screen").width / 2.5,
    borderRadius: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontFamily: "semibold",
    color: Color.white,
  },
  price: {
    fontSize: 18,
    fontFamily: "light",
    color: Color.white,
  },
  progressView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  feature: {
    color: Color.lightgreen,
    fontSize: 16,
    fontFamily: "light",
  },
  featureNumber: {
    color: Color.lightgreen,
    fontSize: 16,
    fontFamily: "bold",
  },
  progressBar: {
    height: 8,
    borderRadius: 10,
    backgroundColor: Color.lightgrey,
  },
});

export default styles;
