import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/HomebannerUtilStyles";
import banner_1 from "../../../../assets/Images/Banner/banner1.jpg";
import banner_2 from "../../../../assets/Images/Banner/banner2.jpg";
import banner_3 from "../../../../assets/Images/Banner/banner3.jpg";
const HomeBanner = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={[banner_1, banner_2, banner_3]}
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
                source={item}
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
