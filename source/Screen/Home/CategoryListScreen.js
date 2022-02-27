import { LinearGradient } from "expo-linear-gradient";
import React from "react";
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

const { width, height } = Dimensions.get("screen");

const CategoryScreen = ({ navigation, route }) => {
  //from props

  const data = route.params?.list;

  //Ref

  const scrollX = React.useRef(new Animated.Value(0)).current;

  //constants
  const ITEM_SIZE = width * 0.72;
  const SPACER_SIZE = (width - ITEM_SIZE) / 2;

  /************functions***********/

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

  return (
    <SafeAreaView style={styles.Screen}>
      {/* Rendering Categories */}

      {/* Background Images */}

      {data.map((item, index) => {
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

      {/* Linear Gradient Added to Background */}

      <LinearGradient
        colors={["rgba(0, 0, 0, 0.3)", Color.black]}
        style={styles.gradient}
      />

      {/* Content Panel */}

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
                {/* Brand Logo Panel */}
                {item.type === "car" ? (
                  <Image
                    resizeMode="contain"
                    style={styles.img}
                    source={getCatLogo(item.name)}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={styles.img}
                    source={{ uri: item.logoImg }}
                  />
                )}

                {/* Brand Name */}

                <Text style={styles.Title}>
                  {item.name !== "morris and garage"
                    ? item.name.toUpperCase()
                    : "MG"}
                </Text>

                {/* Take a tour Panel */}

                <Pressable
                  onPress={() => {
                    //console.log(item);
                    navigation.navigate("carlist", { id: item.companyid });
                  }}
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
