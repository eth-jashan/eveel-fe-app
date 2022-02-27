import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  title: { padding: 8 },
  titleText: {
    color: "white",
    fontFamily: "medium",
    fontSize: 16,
    textAlign: "center",
  },
  compare: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    borderBottomWidth: 2,
    borderColor: "white",
  },
  eachcomp: { padding: 10 },
  feature: {
    color: "white",
    fontFamily: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  differ: {
    position: "absolute",
    alignSelf: "center",
  },
  differText: {
    color: "white",
    fontFamily: "medium",
    fontSize: 30,
    textAlign: "center",
  },
});
export default styles;
