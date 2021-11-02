import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/ParallaxGalleryUtilStyles";
const { width, height } = Dimensions.get("window");
const ParallaxGallery = ({ imageList }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  console.log("Image :", imageList);

  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      data={imageList}
      keyExtractor={(x) => x}
      snapToAlignment={"center"}
      snapToInterval={width * 0.8 + 40}
      decelerationRate="fast"
      contentContainerStyle={{ alignSelf: "center", justifyContent: "center" }}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.component}>
            <Animated.Image
              style={styles.Img}
              source={{ uri: item }}
              resizeMode="cover"
            />
            <>
              <Text style={styles.Index}>{index + 1}.</Text>
              <Text style={styles.Title}>{"Wireless Phone\nCharger"}</Text>
            </>
          </View>
        );
      }}
    />
  );
};


export default ParallaxGallery;
