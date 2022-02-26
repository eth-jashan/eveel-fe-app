import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  scroll: { paddingTop: 80 },
  screen: { paddingBottom: 250 },
  images: { flexDirection: "row", alignSelf: "center" },
  leftimageView: { paddingRight: 10 },
  image: {
    width: Dimensions.get("screen").width / 2.2,
    height: 100,
    borderTopLeftRadius: 20,
  },
  VS: {
    backgroundColor: Color.darkgrey,
    position: "absolute",
    alignSelf: "center",
    marginTop: 30,
    padding: 8,
    borderRadius: 20,
  },
  VSText: {
    color: Color.white,
    fontSize: 18,
    alignSelf: "center",
    fontFamily: "bold",
  },
  carname: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  carnameView: { marginHorizontal: 15 },
  carnameText: { color: "white", fontFamily: "bold" },
  carPriceText: { color: "white", fontFamily: "medium" },
  compareCarButton: {
    alignSelf: "flex-end",
    marginHorizontal: 30,
    backgroundColor: Color.darkgrey,
    padding: 10,
    borderRadius: 10,
  },
  compareCarButtonText: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "bold",
  },
  title: { margin: 15 },
  titleText: {
    color: "white",
    fontFamily: "black",
    fontSize: 24,
  },
  viewMore: {
    margin: 15,
    borderBottomWidth: 1,
    borderColor: "white",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  viewMoreText: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
  },
});

export default styles;
