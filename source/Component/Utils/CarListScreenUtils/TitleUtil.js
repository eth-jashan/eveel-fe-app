import React from "react";
import { View, Text } from "react-native";
import styles from "./UtilStyles/TitleUtilStyles";
const TitleInfo = ({ title_size, index, text, color }) => {
  return (
    <View index={index} style={styles.TitleView}>
      {/* Title Panel */}

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

export default TitleInfo;
