import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  Animated,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
// import { View, Text, Image, StyleSheet } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PerformanceCard from "../../Component/Utils/CarProfileScreenUtils/PerformanceCardUtil";
import ParallaxGallery from "../../Component/Utils/CarProfileScreenUtils/ParallaxGalleryUtil";
import LinkPreview from "react-native-link-preview";
import {
  Ionicons,
  FontAwesome5,
  Feather,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import YoutubeIframe from "react-native-youtube-iframe";
import { ImageBackground } from "react-native";
import { CommonActions, Link } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import { useNavigationState } from "@react-navigation/native";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/CarProfileScreenStyles";
import {
  variantList,
  colorVariantList,
} from "../../../model/Data/carProfiledata";
import { useDispatch, useSelector } from "react-redux";
import { addVechile_1 } from "../../Store/action/compareCar";
import * as Cars from "../../Store/action/likedCars";
import getCatLogo from "../../Component/Utils/CarProfileScreenUtils/GetCatLogoUtil";
import BigSlide from "../../Component/Utils/CarProfileScreenUtils/BigSlidePhotoUtil";
import SmallSlide from "../../Component/Utils/CarProfileScreenUtils/SmallSlidePhotoUtil";
import YoutubeCard from "../../Component/Utils/CarProfileScreenUtils/YoutubeUtil";
import FeatureModel from "../../Component/Utils/CarProfileScreenUtils/FeatureModal";
const { width, height } = Dimensions.get("window");

const CarProfilePage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const item = route.params.item;
  const list = route.params?.list;
  const companyList = useSelector((state) => state.company.companyList);
  const comp = companyList.filter((state) => state.companyid == item.companyId);
  const feature = useSelector((state) => state.feature.featureList);
  const likecarList = useSelector((state) => state.likedCars.likedCarList);
  const modalize = useRef();
  const modalizeSafety = useRef();
  const modalizeColor = useRef();
  const modelizeYoutube = useRef();
  const topRef = useRef();
  const thumbRef = useRef();
  const [colorname, setColorName] = useState();
  const [indexColor, setIndexColor] = useState();
  const [likedCar, setLikedCar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [youtubeData, setYoutubeData] = useState(null);
  // navigation.setOptions({
  //   headerShown: true,
  //   headerTitle: "",
  //   headerTransparent: true,
  //   headerLeft: () => {
  //     return (
  //       <TouchableOpacity
  //         style={{ marginHorizontal: 15 }}
  //         onPress={() => {
  //           props.navigation.navigate('Home');
  //         }}
  //       >
  //         <Ionicons name="arrow-back" color={Color.black} size={25} />
  //       </TouchableOpacity>
  //     );
  //   },
  //   headerRight: () => {
  //     return (
  //       <TouchableOpacity
  //         style={{
  //           backgroundColor: Color.darkgrey,
  //           marginHorizontal: 15,
  //           borderRadius: 20,
  //         }}
  //         onPress={async () => {
  //           await setLikedCar((prev) => !prev);
  //           if (!likedCar) {
  //             await dispatch(Cars.addLikedCar(item.carId));
  //           } else {
  //             await dispatch(Cars.dislikedCar(item.carId));
  //             await dispatch(Cars.fetchLikedCar());
  //           }
  //         }}
  //       >
  //         <AntDesign
  //           name={likedCar ? "heart" : "hearto"}
  //           size={24}
  //           color={likedCar ? Color.lightgreen : Color.white}
  //           style={{
  //             padding: 8,
  //             alignSelf: "center",
  //             overflow: "hidden",
  //           }}
  //         />
  //       </TouchableOpacity>
  //     );
  //   },
  // });

  useEffect(async () => {
    const link = `https://www.youtube.com/watch?v=${item.youtube}`;
    const metaData = await LinkPreview.getPreview(link);
    console.log(item.youtube);
    await setYoutubeData(metaData);
  }, []);

  useEffect(() => {
    console.log("Youtube", youtubeData);
  }, [youtubeData]);
  const exteriorFeature = feature.filter(
    (fe) => fe.name == "ext" && fe.carid == item.carId
  );
  const safetyFeature = feature.filter(
    (fe) => fe.name == "comfort" && fe.carid == item.carId
  );
  const gallery = feature.filter(
    (fe) => fe.name == "gallery" && fe.carid == item.carId
  );
  const likecar = likecarList.filter((car) => car.carId === item.carId);
  useEffect(() => {
    if (likecar.length == 0) {
      setLikedCar(false);
    } else {
      setLikedCar(true);
    }
  }, []);
  // console.log(gallery);
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
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
        Alert.alert("Are you sure?", "Want to leave car profile", [
          { text: "Stay", onPress: () => {} },
          {
            text: "Leave",
            // style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              navigation.dispatch(e.data.action);
            },
          },
        ]);
      }),
    [navigation]
  );
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
  const changeState = () => {
    setLikedCar((prev) => !prev);
  };
  return (
    <View style={styles.screen}>
      <ScrollView
        //stickyHeaderIndices={[0]}
        style={styles.scroll}
      >
        <BigSlide
          topRef={topRef}
          gallery={gallery}
          carId={item.carId}
          scrollToActiveIndex={scrollToActiveIndex}
        />
        <TouchableOpacity
          style={{ position: "absolute", alignSelf: "flex-end", marginTop: 30 }}
          onPress={async () => {
            await setLikedCar((prev) => !prev);
            if (!likedCar) {
              await dispatch(Cars.addLikedCar(item.carId));
            } else {
              await dispatch(Cars.dislikedCar(item.carId));
              await dispatch(Cars.fetchLikedCar());
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
        <SmallSlide
          thumbRef={thumbRef}
          gallery={gallery}
          scrollToActiveIndex={scrollToActiveIndex}
          activeIndex={activeIndex}
        />

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

        <Pressable
          style={{
            width: "90%",
            padding: 8,
            borderColor: Color.lightgreen,
            borderWidth: 0.75,
            flexDirection: "row",
            borderRadius: 8,
            alignSelf: "center",
            justifyContent: "space-around",
            marginVertical: 8,
          }}
        >
          <FontAwesome name="whatsapp" size={24} color={Color.lightgreen} />
          <Text
            style={{
              color: Color.lightgreen,
              fontFamily: "medium",
              alignSelf: "center",
            }}
          >
            Enquire on whatsApp
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "90%",
            padding: 8,
            backgroundColor: Color.lightgreen,
            flexDirection: "row",
            borderRadius: 8,
            alignSelf: "center",
            justifyContent: "space-around",
            marginVertical: 8,
          }}
        >
          <MaterialIcons name="compare" size={24} color="black" />
          <Text
            style={{
              color: "black",
              fontFamily: "medium",
              alignSelf: "center",
            }}
          >
            Compare the car
          </Text>
        </Pressable>

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
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        <View>
          <Text style={styles.AboutTheCar}>About The Car</Text>
          <View style={{ margin: 15 }}>
            <TouchableOpacity
              onPress={() => {
                modelizeYoutube.current?.open();
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ color: "grey", fontFamily: "light", fontSize: 20 }}
                >
                  {youtubeData?.title}
                  {"  "}
                  <Ionicons
                    name="logo-youtube"
                    size={24}
                    color={"red"}
                    style={{ alignSelf: "center" }}
                  />
                </Text>
              </View>
              <View style={{ alignSelf: "center" }}>
                <ImageBackground
                  source={{ uri: youtubeData?.images[0] }}
                  style={{
                    width: Dimensions.get("window").width * 0.8,
                    height: 250,
                  }}
                >
                  <View
                    style={{
                      marginTop: 125,
                      alignSelf: "center",
                      borderRadius: 25,
                      backgroundColor: "grey",
                      opacity: 0.4,
                    }}
                  >
                    <AntDesign
                      style={{ alignSelf: "center", padding: 10 }}
                      name="caretright"
                      size={24}
                      color={"white"}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
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
      <FeatureModel
        modalize={modalize}
        firstLine={"Exterior"}
        secondLine={"Interior"}
        List={exteriorFeature}
      />
      <FeatureModel
        modalize={modalizeSafety}
        firstLine={"Safety"}
        secondLine={"Comfort Feature"}
        List={safetyFeature}
      />
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
      <Modalize
        modalHeight={Dimensions.get("window").height * 0.6}
        ref={modelizeYoutube}
        modalStyle={{ backgroundColor: "black" }}
      >
        <View
          style={{
            backgroundColor: Color.black,
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ alignSelf: "center" }}>
            <YoutubeIframe
              height={250}
              width={Dimensions.get("window").width * 0.98}
              webViewStyle={{ borderRadius: 10 }}
              play={false}
              videoId={item.youtube}
            />
          </View>
        </View>
      </Modalize>
    </View>
  );
};

export default CarProfilePage;
