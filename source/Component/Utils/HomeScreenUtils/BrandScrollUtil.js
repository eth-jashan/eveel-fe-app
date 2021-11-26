import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/BrandScrollUtilStyles";

const BrandScroll = (props) => {
  const category = useSelector((x) => x.company.companyList);
  const data = category;
  const navigation = useNavigation();
  const getCatLogo = (data) => {
    switch (data) {
      case "tata":
        return require("../../../../assets/Images/Tata.png");

      case "hyundai":
        return require("../../../../assets/Images/Hyundai.png");

      case "morris and garage":
        return require("../../../../assets/Images/MG.png");

      case "audi":
        return require("../../../../assets/Images/Audi.png");

      case "mercedes":
        return require("../../../../assets/Images/Mercedes.png");

      default:
        null;
    }
  };

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
            //console.log(getCatLogo(item.name), item.name);
            return (
              <View style={styles.Box}>
                <Image source={getCatLogo(item.name)} style={styles.image} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BrandScroll;
