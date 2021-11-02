import React, { useRef, useState } from "react";
import { Dimensions, Pressable, Animated } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PerformanceCard from "../../Component/Utils/CarProfileScreenUtils/PerformanceCardUtil";
import ParallaxGallery from "../../Component/Utils/CarProfileScreenUtils/ParallaxGalleryUtil";
import {
  Ionicons,
  FontAwesome5,
  Feather,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import YoutubeIframe from "react-native-youtube-iframe";
import { ImageBackground } from "react-native";
import { Modalize } from "react-native-modalize";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/CarProfileScreenStyles";
import {
  imageGallery,
  exteriorInterior,
  features,
  variantList,
  colorVariantList,
} from "../../../model/carProfiledata";
const { width, height } = Dimensions.get("window");
const CarProfilePage = () => {
  const modalize = useRef();
  const modalizeColor = useRef();
  const [colorname, setColorName] = useState();
  const [indexColor, setIndexColor] = useState();

  const onPress = (index, title) => {
    modalizeColor.current?.open();
    setIndexColor(index);
    setColorName(title);
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View>
          <FlatList
            horizontal
            keyExtractor={(x) => x}
            data={imageGallery}
            snapToAlignment={"center"}
            snapToInterval={Dimensions.get("window").width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.carImages}>
                  <Image style={styles.carImage} source={{ uri: item }} />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.SmallCarCon}>
          <FlatList
            horizontal
            data={imageGallery}
            keyExtractor={(x) => x}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.smallcarImages}>
                  <Image style={styles.carImage} source={{ uri: item }} />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.BrandInfo}>
          <View style={styles.BrandView}>
            <Image
              resizeMode="contain"
              style={styles.Brand}
              source={require("../../../assets/Images/Hyundai.png")}
            />
          </View>
          <Text style={styles.BrandName}>Hyundai Kona</Text>
          <Text style={styles.BrandRate}>
            Starting <Text style={{ color: Color.lightgreen }}>@</Text> ₹10.36
            lacs*
          </Text>
        </View>

        <View>
          <Text style={styles.header}>Key Specs</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={features}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <PerformanceCard
                  icon={item.component}
                  title={item.title}
                  number={item.value}
                />
              );
            }}
          />
        </View>

        <View>
          <Text style={styles.AboutTheCar}>About The Car</Text>
          <View style={{ marginBottom: 12 }}>
            <YoutubeIframe
              height={200}
              width={Dimensions.get("window").width * 0.98}
              webViewStyle={{ borderRadius: 10 }}
              play={true}
              videoId={"5G6_-Qo1mwU"}
            />
          </View>
          <View style={styles.description}>
            <Text style={styles.descText}>
              Versatile and powerful, the KONA Electric will be the first
              All-Electric SUV in India. Its power packed performance provides a
              thrilling driving experience with high acceleration over long
              distances. KONA Electric is here to change the way people think
              about going electric.
            </Text>
          </View>
        </View>

        <View>
          <Pressable onPress={() => modalize.current?.open()}>
            <ImageBackground
              resizeMode="cover"
              style={styles.features}
              blurRadius={2}
              source={{
                uri: "https://imgd.aeplcdn.com/0x0/cw/ec/29580/Hyundai-Kona-Electric-Dashboard-162432.jpg?wm=0",
              }}
            >
              <Text style={styles.featuresText}>
                {"Interior &\n Exterior Features"}
              </Text>
            </ImageBackground>
          </Pressable>

          <Pressable onPress={() => modalize.current?.open()}>
            <ImageBackground
              resizeMode="cover"
              style={styles.features}
              blurRadius={2}
              source={{
                uri: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Kona/Safety/pc/Hyundai-Kona-electric-safety-top-1.jpg",
              }}
            >
              <Text style={styles.featuresText}>
                {"Safety &\n Comfort Features"}
              </Text>
            </ImageBackground>
          </Pressable>
        </View>

        <View>
          <Text style={styles.header}>Variants</Text>
          <FlatList
            style={styles.IconArrange}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.Constyle}
            horizontal
            data={variantList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.BoxView}>
                  <Image
                    style={styles.EveelLogo}
                    source={require("../../../assets/Images/map-pointer-multi.png")}
                  />
                  <Text style={styles.Variants}>{item.name}</Text>
                  <Text style={styles.BrandVar}>Hyundai Kona</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.ColorView}>
          <Text style={styles.header}>Colors</Text>
          <FlatList
            style={styles.IconArrange}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.Constyle}
            horizontal
            data={colorVariantList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ index, item }) => {
              return (
                <View style={styles.ColorBoxView}>
                  <Pressable
                    onPress={() => onPress(index, item.name)}
                    style={[
                      styles.color,
                      {
                        backgroundColor: item.hexCode,
                      },
                    ]}
                  />
                  <Text style={styles.ColorName}>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <Modalize
        modalHeight={Dimensions.get("window").height * 0.7}
        ref={modalize}
      >
        <View style={styles.ModalView}>
          <Text style={styles.ModalHeader}>
            Exterior
            <Text style={styles.AndSy}>& </Text>
            Interior
          </Text>

          <ParallaxGallery imageList={exteriorInterior} />
        </View>
      </Modalize>

      <Modalize
        modalHeight={Dimensions.get("window").height * 0.6}
        ref={modalizeColor}
      >
        <View style={styles.ColorModalView}>
          <View style={styles.ColorModal}>
            <Animated.Image
              style={styles.ColorModalImg}
              source={{
                uri: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Hyundai-Kona/6234/1562660896827/222_phantom-black_050505.jpg?tr=w-880,h-495",
              }}
              resizeMode="cover"
            />
            <>
              <Text style={styles.ColorIndex}>{indexColor}.</Text>
              <Text style={styles.ColorModalName}>{colorname}</Text>
            </>
          </View>
        </View>
      </Modalize>
    </View>
  );
};

export default CarProfilePage;
