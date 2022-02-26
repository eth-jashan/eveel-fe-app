import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, Dimensions, Pressable } from "react-native";
import styles from "./UtilStyles/TakeaTourStyles";

const TakeaTour = ({ size, data, index, color }) => {
  return (
    <Pressable style={styles.Button} onPress={() => {}}>
      <Text style={styles.Buttontext}>Take a Tour</Text>
    </Pressable>
  );
};

export default TakeaTour;
