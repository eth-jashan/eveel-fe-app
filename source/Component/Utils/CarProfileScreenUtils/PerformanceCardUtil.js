import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/PerformanceCardUtilStyles";
const PerformanceCard = ({ icon, title, number }) => {
  return (
    <View style={styles.Card}>
      {icon}
      <Text style={styles.CardNumber}>{number}</Text>
      <Text style={styles.CardTitle}>{title}</Text>
    </View>
  );
};

export default PerformanceCard;
//facing prob in title
