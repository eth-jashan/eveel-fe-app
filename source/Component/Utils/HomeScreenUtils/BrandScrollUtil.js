import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { category } from "../../../../model/dummyData";

import { FlatList } from "react-native-gesture-handler";
import Color from  "../../../../assets/Color";
const BrandScroll = (props) => {
  const data = category;
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "bold",
            color: Color.white,
            fontSize: 22,
            alignSelf: "center",
          }}
        >
          Top Brands
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "medium",
            padding: 5,
            color: Color.white,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Color.lightgreen,
            alignSelf: "center",
          }}
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: 300,
                  height: 150,
                  minWidth: 250,
                  padding: 20,
                  marginHorizontal: 15,
                  marginBottom: 40,
                  borderRadius: 15,
                  shadowOffset: {
                    width: 10,
                    height: 12,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 16.0,
                  elevation: 16,
                  shadowColor: Color.darkgreen,
                  backgroundColor: Color.darkgreen,
                }}
              >
                <Image
                  source={item.logoUrl}
                  style={{
                    width: "80%",
                    height: "80%",
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BrandScroll;
