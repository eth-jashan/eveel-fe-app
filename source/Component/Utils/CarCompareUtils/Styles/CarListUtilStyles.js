import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  screen: { marginTop: 50 },
  title: { margin: 15 },
  titleText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "bold",
  },
  mapping: { paddingBottom: 100 },
  card: { flexDirection: "row", margin: 15 },
  image: { width: 100, height: 100, borderRadius: 15 },
  content: { padding: 15 },
  carName: {
    color: "white",
    fontFamily: "bold",
    fontSize: 22,
  },
  carPrice: {
    backgroundColor: Color.darkgreen,
    borderRadius: 20,
  },
  carPriceText: {
    color: Color.lightgreen,
    padding: 10,
    fontSize: 14,
    fontFamily: "medium",
  },
});

export default styles;
