import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../../assets/Color";
const styles = StyleSheet.create({
  Card: {
    backgroundColor: Color.darkgrey,
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 12,
    marginHorizontal: 4,
    width: 150,
  },
  CardNumber: {
    fontFamily: "medium",
    fontSize: 18,
    color: Color.lightgreen,
    alignSelf: "center",
  },
  CardTitle: {
    fontFamily: "book",
    fontSize: 18,
    color: Color.white,
    alignSelf: "center",
  },
});

export default styles;
