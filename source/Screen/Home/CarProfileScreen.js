import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PerformanceCard from "../../Component/Utils/CarProfileScreenUtils/PerformanceCardUtil";
import ParallaxGallery from "../../Component/Utils/CarProfileScreenUtils/ParallaxGalleryUtil";
import * as Cars from "./../../Store/action/likedCars";
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
  variantList,
  colorVariantList,
} from "../../../model/Data/carProfiledata";
import { useDispatch, useSelector } from "react-redux";
import { addVechile_1 } from "../../Store/action/compareCar";
import { set } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const CarProfilePage = (props) => {
  const dispatch = useDispatch();
  const modalize = useRef();
  const modalizeSafety = useRef();
  const modalizeColor = useRef();
  const [colorname, setColorName] = useState();
  const [indexColor, setIndexColor] = useState();
  const item = props.route.params.item;
  const companyList = useSelector((state) => state.company.companyList);
  const topRef = useRef();
  const thumbRef = useRef();
  const [likedCar, setLikedCar] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  //console.log(companyList);
  //console.log(item);
  const comp = companyList.filter((c) => c.companyid == item.companyId);
  //console.log(comp);
  const feature = useSelector((state) => state.feature.featureList);
  const likedcar = useSelector((state) => state.likedCars.likedCarList);
  useEffect(() => {
    console.log("Liked Car List===>", likedcar);
  }, [likedcar]);
  //console.log(feature);
  const exteriorFeature = feature.filter(
    (fe) => fe.name == "ext" && fe.carid == item.carId
  );
  const safetyFeature = feature.filter(
    (fe) => fe.name == "comfort" && fe.carid == item.carId
  );
  const gallery = feature.filter(
    (fe) => fe.name == "gallery" && fe.carid == item.carId
  );
  //console.log(gallery);
  //console.log(exteriorFeature);
  const onPress = (index, title) => {
    modalizeColor.current?.open();
    setIndexColor(index);
    setColorName(title);
  };
  const getCatLogo = (data) => {
    switch (data) {
      case "tata":
        return require("../../../assets/Images/Tata.png");

      case "hyundai":
        return require("../../../assets/Images/Hyundai.png");

      case "morris garage":
        return require("../../../assets/Images/MG.png");

      case "audi":
        return require("../../../assets/Images/Audi.png");

      case "mercedes":
        return require("../../../assets/Images/Mercedes.png");

      default:
        null;
    }
  };
  //console.log("company", comp);
  const features = [
    {
      value: item.battery,
      title: "Battery",
      component: (
        <Feather
          style={{ alignSelf: "center" }}
          name="battery-charging"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.range,
      title: "Range",
      component: (
        <FontAwesome5
          style={{ alignSelf: "center" }}
          name="road"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.horse,
      title: "Horse",
      component: (
        <FontAwesome5
          style={{ alignSelf: "center" }}
          name="horse-head"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.torque,
      title: "Torque",
      component: (
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="gears"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.speed,
      title: "0-100Km/h",
      component: (
        <MaterialCommunityIcons
          style={{ alignSelf: "center" }}
          name="speedometer"
          size={24}
          color={"white"}
        />
      ),
    },
  ];
  const likeCar = () => {
    if (likedCar == true) {
      console.log(item.carId);
      dispatch(Cars.likedCars(item.carId));
    } else if (likedCar == false) {
      dispatch(Cars.dislikedCar(item.carId));
    }
  };
  useEffect(() => {
    likeCar();
  }, [likedCar]);
  const scrollToActiveIndex = (index) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    const image_size = 100;
    const space = 10;
    if (index * (image_size + space) - image_size / 2 > width / 4) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (image_size + space) - width / 4 + image_size / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
    //scroll flatlists
  };
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View>
          <FlatList
            ref={topRef}
            horizontal
            keyExtractor={(_, i) => i.toString()}
            data={gallery}
            snapToAlignment={"center"}
            snapToInterval={Dimensions.get("window").width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(ev) => {
              scrollToActiveIndex(
                Math.floor(ev.nativeEvent.contentOffset.x / width)
              );
            }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{ width: Dimensions.get("window").width, height: 250 }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("SlideScreen", {
                        gallery,
                        index,
                      });
                    }}
                  >
                    <Image
                      style={styles.carImage}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <TouchableOpacity
          style={{ position: "absolute", alignSelf: "flex-end", marginTop: 30 }}
          onPress={async () => {
            if (likedCar) {
              setLikedCar(false);
            } else {
              setLikedCar(true);
            }
          }}
        >
          <AntDesign
            name={likedCar ? "heart" : "hearto"}
            size={24}
            color={likedCar ? Color.lightgreen : "white"}
            style={{
              margin: 20,
              backgroundColor: Color.darkgrey,
              padding: 8,
              borderRadius: 20,
              alignSelf: "center",
              overflow: "hidden",
            }}
          />
        </TouchableOpacity>
        <View style={styles.SmallCarCon}>
          <FlatList
            ref={thumbRef}
            horizontal
            data={gallery}
            keyExtractor={(_, i) => i.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.smallcarImages}
                  onPress={() => scrollToActiveIndex(index)}
                >
                  <Image
                    style={[
                      styles.carImage,
                      {
                        borderWidth: 0.7,
                        borderColor:
                          index === activeIndex
                            ? Color.lightgreen
                            : "transparent",
                      },
                    ]}
                    source={{ uri: item.image }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={styles.BrandInfo}>
          <View style={styles.BrandView}>
            {comp[0].type === "car" ? (
              <Image
                resizeMode="contain"
                style={styles.Brand}
                source={getCatLogo(comp[0].name)}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={styles.Brand}
                source={{ uri: comp[0].logoImg }}
              />
            )}
          </View>
          <Text style={styles.BrandName}>{item.name.toUpperCase()}</Text>
          <Text style={styles.BrandRate}>
            Starting <Text style={{ color: Color.lightgreen }}>@</Text> ₹
            {item.startPrice}*
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
        <TouchableOpacity
          style={{
            backgroundColor: Color.lightgreen,
            alignSelf: "flex-start",
            margin: 15,
            borderRadius: 15,
          }}
          onPress={() => {
            dispatch(addVechile_1(item));
            props.navigation.navigate("CarCompare", { vehicle1: item });
          }}
        >
          <Text style={{ color: "black", fontFamily: "bold", padding: 10 }}>
            Compare the car
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.AboutTheCar}>About The Car</Text>
          <View style={{ marginBottom: 12 }}>
            <YoutubeIframe
              height={250}
              width={Dimensions.get("window").width * 0.98}
              webViewStyle={{ borderRadius: 10 }}
              play={true}
              videoId={item.youtube}
            />
          </View>
          <View style={styles.description}>
            <Text style={styles.descText}>{item.description}</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
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

          <Pressable onPress={() => modalizeSafety.current?.open()}>
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
          <ParallaxGallery imageList={exteriorFeature} />
        </View>
      </Modalize>
      <Modalize
        modalHeight={Dimensions.get("window").height * 0.75}
        ref={modalizeSafety}
      >
        <View style={styles.ModalView}>
          <Text style={styles.ModalHeader}>
            Safety
            <Text style={styles.AndSy}>& </Text>
            Comfort Feature
          </Text>

          <ParallaxGallery imageList={safetyFeature} />
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
