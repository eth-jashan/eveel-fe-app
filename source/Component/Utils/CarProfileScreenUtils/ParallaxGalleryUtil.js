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

  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      data={imageList}
      keyExtractor={(_, i) => i.toString()}
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
              source={{ uri: item.image }}
              resizeMode="cover"
            />
            <>
              <Text style={styles.Index}>{index + 1}.</Text>
              <Text style={styles.Title}>{item.feature}</Text>
            </>
          </View>
        );
      }}
    />
  );
};

export default ParallaxGallery;
