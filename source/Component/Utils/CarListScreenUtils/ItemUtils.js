import React from "react";
import { View, StyleSheet } from "react-native";

const Item = ({ index, children, style }) => {
  return (
    <View key={index} style={[styles.ItemStyle, style]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  ItemStyle: {
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "transparent",
    padding: 8,
  },
});

export default Item;
