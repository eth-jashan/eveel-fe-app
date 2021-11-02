import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Item from "./ItemUtils";
const { width, height } = Dimensions.get("screen");
const PriceInfo = ({ price_size, data, index, color }) => {
  return (
    <Item style={styles.priceView}>
      <Text
        key={`priceInfo-${index}`}
        style={[{ fontSize: price_size, color: color }, styles.PriceInfo]}
      >
        {data[index].startingprice}
      </Text>
    </Item>
  );
};

const styles = StyleSheet.create({
  priceView: { top: height / 4 },
  PriceInfo: { alignSelf: "center" },
});

export default PriceInfo;
