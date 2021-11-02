import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/HomebannerUtilStyles";
const HomeBanner = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={["1", "2", "3", "4", "5"]}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(x) => x}
        snapToInterval={310}
        decelerationRate="fast"
        snapToAlignment="start"
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                {
                  marginLeft: index === 0 ? 16 : 0,
                },
                styles.Box,
              ]}
            ></View>
          );
        }}
      />
    </View>
  );
};

export default HomeBanner;
