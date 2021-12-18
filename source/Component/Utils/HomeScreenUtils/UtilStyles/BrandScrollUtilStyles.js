import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../../assets/Color";
const styles = StyleSheet.create({
  Headingbar: {
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
    alignSelf: "center",
  },
  Box: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    height: 150,
    minWidth: 250,
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 40,
    borderRadius: 15,
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,
    elevation: 16,
    shadowColor: Color.darkgreen,
    backgroundColor: Color.darkgreen,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default styles;
