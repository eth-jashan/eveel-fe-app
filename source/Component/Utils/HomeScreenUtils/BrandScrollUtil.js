import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { category } from "../../../../model/dummyData";

import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/BrandScrollUtilStyles";
const BrandScroll = (props) => {
  const data = category;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Headingbar}>
        <Text style={styles.title}>Top Brands</Text>
        <Text
          onPress={() => {
            navigation.navigate("Category");
          }}
          style={styles.more}
        >
          See All
        </Text>
      </View>
      <View>
        <FlatList
          decelerationRate="fast"
          snapToAlignment="start"
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.Box}>
                <Image source={item.logoUrl} style={styles.image} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BrandScroll;
