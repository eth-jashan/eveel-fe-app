import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/HomebannerUtilStyles";
import banner_1 from "../../../../assets/Images/banner1.jpg";
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
            >
              <Image
                source={banner_1}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeBanner;
