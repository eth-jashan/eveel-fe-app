import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Color from "../../../../assets/Color";
import Item from "./ItemUtils";
import styles from "./UtilStyles/TakeaTourStyles";
const { width, height } = Dimensions.get("screen");
const TakeaTour = ({ size, data, index, color }) => {
  const navigation = useNavigation();
  return (
    <Item style={styles.screen}>
      <TouchableOpacity
        key={`priceInfo-${index}`}
        style={styles.Button}
        onPress={() => {
          navigation.navigate("CarProfile", { item: data });
        }}
      >
        <Text style={styles.Buttontext}>Take a Tour</Text>
      </TouchableOpacity>
    </Item>
  );
};

export default TakeaTour;
