import React from "react";
import { View } from "react-native";
import styles from "./UtilStyles/ItemUtilStyles";
const Item = ({ index, children, style }) => {
  return (
    <View key={index} style={[styles.ItemStyle, style]}>
      {children}
    </View>
  );
};

export default Item;
