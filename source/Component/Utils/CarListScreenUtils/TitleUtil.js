import React from "react";
import { View, Text, StyleSheet } from "react-native";
const TitleInfo = ({ title_size, index, text, color }) => {
  return (
    <View index={index} style={styles.TitleView}>
      <Text
        key={`title-${index}`}
        style={[
          styles.TitleInfo,
          {
            fontSize: title_size,
            color: color,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleView: { overflow: "hidden" },
  TitleInfo: { fontFamily: "bold", alignSelf: "center" },
});

export default TitleInfo;
