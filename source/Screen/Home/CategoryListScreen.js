import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/CategoryListScreenStyles";
import { category } from "../../../model/Data/dummyData";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

const CategoryScreen = ({ navigation, route }) => {
  const url1 =
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20200904110617_EQC-front-track.jpg&h=795&w=1200&c=1";
  const url2 =
    "https://ev-database.org/img/auto/Mercedes_EQC/Mercedes_EQC-01.jpg";

  const [mainImage, setMainImage] = useState([
    { index: "1", uri: url1 },
    { index: "2", uri: url2 },
    { index: "3", uri: url1 },
    { index: "4", uri: url2 },
    { index: "5", uri: url1 },
    { index: "6", uri: url2 },
    { index: "7", uri: url1 },
    { index: "7", uri: url2 },
  ]);
  const category = useSelector((x) => x.company.companyList);
  const data = category;

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = width * 0.72;
  const SPACER_SIZE = (width - ITEM_SIZE) / 2;
  const getCatLogo = (data) => {
    switch (data) {
      case "tata":
        return require("../../../assets/Images/Tata.png");

      case "hyundai":
        return require("../../../assets/Images/Hyundai.png");

      case "morris and garage":
        return require("../../../assets/Images/MG.png");

      case "audi":
        return require("../../../assets/Images/Audi.png");

      case "mercedes":
        return require("../../../assets/Images/Mercedes.png");

      default:
        null;
    }
  };
  // const getCatName = (data) => {
  //   switch (data) {
  //     case "tata":
  //       return "Tata";

  //     case "hyundai":
  //       return "Hyundai";

  //     case "morris and garage":
  //       return "Morris & Garage";

  //     case "audi":
  //       return "Audi";

  //     case "mercedes":
  //       return "Mercedes";

  //     default:
  //       null;
  //   }
  // };
  return (
    <SafeAreaView style={styles.Screen}>
      {data.map((item, index) => {
        //console.log("ITEM+++++>",item.backgroundImg);
        return (
          <Animated.Image
            key={index}
            blurRadius={2}
            style={{
              width: "100%",
              height: 400,
              zIndex: 0,
              left: 0,
              right: 0,
              position: "absolute",
              opacity: scrollX.interpolate({
                inputRange: [
                  (index - 1) * (ITEM_SIZE + 40),
                  index * (ITEM_SIZE + 40),
                  (index + 1) * (ITEM_SIZE + 40),
                ],
                outputRange: [0, 1, 0],
              }),
            }}
            source={{ uri: item.backgroundImg }}
          />
        );
      })}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.3)", Color.black]}
        style={styles.gradient}
      />
      <View style={styles.Scrolling}>
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          data={data}
          horizontal
          snapToInterval={ITEM_SIZE + 40}
          decelerationRate="fast"
          snapToAlignment="start"
          contentContainerStyle={styles.container}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  {
                    width: ITEM_SIZE,
                  },
                  styles.BrandView,
                ]}
              >
                {item.type==='car'?<Image
                  resizeMode="contain"
                  style={styles.img}
                  source={getCatLogo(item.name)}
                />:<Image
                resizeMode="contain"
                style={styles.img}
                source={{ uri: item.logoImg }}
              />}
                  <Text style={styles.Title}>{item.name}</Text>           
                <Pressable
                  onPress={() => navigation.navigate("carlist", { id: index })}
                  style={styles.button}
                >
                  <Text style={styles.ButtonText}>Take A Tour</Text>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
