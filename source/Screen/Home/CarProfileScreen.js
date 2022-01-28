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
} from "react-native";
import FeatureList from "../../Component/Utils/CarProfileScreenUtils/FeatureListUtil";
import { AntDesign } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { Modalize } from "react-native-modalize";
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
const CarProfilePage = (props) => {
  const item = props.route.params.item;
  const companyList = useSelector((state) => state.company.companyList);
  const comp = companyList.filter((state) => state.companyid == item.companyId);
  const feature = useSelector((state) => state.feature.featureList);
  const likecarList = useSelector((state) => state.likedCars.likedCarList);
  const dispatch = useDispatch();
  const modalize = useRef();
  const modalizeSafety = useRef();
  const modalizeColor = useRef();
  const topRef = useRef();
  const thumbRef = useRef();
  const [colorname, setColorName] = useState();
  const [indexColor, setIndexColor] = useState();
  const [likedCar, setLikedCar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
  console.log(gallery);
  const onPress = (index, title) => {
    modalizeColor.current?.open();
    setIndexColor(index);
    setColorName(title);
  };
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
        <BigSlide
          topRef={topRef}
          gallery={gallery}
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
        <FeatureList item={item} />
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
        <YoutubeCard link={item.youtube} description={item.description} />
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
    </View>
  );
};

export default CarProfilePage;
