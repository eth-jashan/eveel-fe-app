import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  BackHandler,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import CategorySelection from "../../Component/Utils/HomeScreenUtils/categorySelectionUtil";
import HomeBanner from "../../Component/Utils/HomeScreenUtils/HomebannerUtil";
import BrandScroll from "../../Component/Utils/HomeScreenUtils/BrandScrollUtil";
import CarScroll from "../../Component/Utils/HomeScreenUtils/CarScrollUtil";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/HomescreenStyles";
import { fetchCompany } from "../../Store/action/company";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarModel } from "../../Store/action/car";
import HomeScreenLoadingUtil from "../../Component/Utils/HomeScreenUtils/HomeScreenLoadingUtil";
import { LoggedInUser } from "../../Store/action/auth";
import { fetchfeature } from "../../Store/action/feature";
import { fetch_station } from "../../Store/action/station";
import { fetchLikedCar } from "../../Store/action/likedCars";
import AnimatedLottieView from "lottie-react-native";
const Homescreen = ({ navigation }) => {
  //hookes
  const dispatch = useDispatch();

  //From redux
  const user = useSelector((state) => state.auth);
  const CList = useSelector((state) => state.company.companyList);
  const VList = useSelector((state) => state.car.vehicleList);
  const carList = useSelector((state) => state.car.carList);
  const scootyList = useSelector((state) => state.car.scootyList);

  //Input states
  const [companyList, setCompanyList] = useState();
  const [vehicleList, setVehicleList] = useState();

  //Validation
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(true);

  //CurrentTime
  const hours = new Date().getHours();
  const [greetings, setGreetings] = useState("");

  /*********UseEffect******/

  useEffect(() => {
    if (hours < 12) {
      setGreetings("morning");
    } else if (hours < 16) {
      setGreetings("afternoon");
    } else {
      setGreetings("evening");
    }
  }, []);

  useEffect(() => {
    setCompanyList(CList);
    setVehicleList(VList);
  }, [CList, VList]);

  useEffect(() => {
    setLoading(true);
    homeScreenData();
    setLoading(false);
  }, [dispatch]);

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go leave?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };
  //   if (Platform.OS==='android') {
  //     const backHandler = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       backAction
  //     );
  //     return () => backHandler.remove();
  //   } else {
  //     props.navigation.addListener("beforeRemove", (e) => {
  //       e.preventDefault();
  //     });
  //   }
  // }, [props.navigation]);

  /***********functions***********/

  const SelectedCategory = (type) => {
    switch (type) {
      case "All":
        setEmpty(false);
        setCompanyList(CList);
        setVehicleList(VList);
        return;
      case "Cars":
        setEmpty(false);
        setCompanyList(CList.filter((item) => item.type === "car"));
        setVehicleList(carList);
        console.log("CCCCCCC", companyList);
        return;
      case "Scooty":
        setEmpty(false);
        setCompanyList(CList.filter((item) => item.type === "twoWheeler"));
        setVehicleList(scootyList);
        return;
      case "Cycle":
        setEmpty(true);
        return;
      default:
        return;
    }
  };

  const homeScreenData = () => {
    dispatch(fetchCompany());
    dispatch(fetchCarModel());
    dispatch(fetchfeature());
    dispatch(fetch_station());
    dispatch(fetchLikedCar());
  };

  return (
    <View style={styles.screen}>
      {/* Loading panel */}

      {/* {loading ? (
        <HomeScreenLoadingUtil />
      ) : ( */}

      {/* Rendered Panel */}
      <View style={styles.LoadedScreen}>
        {/* Header Panel */}

        <View style={styles.heading}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/Images/eveels-logo.png")}
              style={styles.logo}
            />
            <Image
              source={require("../../../assets/Images/eveels-words.png")}
              style={styles.logo2}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image
              source={require("../../../assets/Images/Ellipse.png")}
              style={styles.profile}
            />
          </TouchableOpacity>
        </View>

        {/* Screen Content panel */}

        <ScrollView
          contentContainerStyle={styles.screenscroll}
          showsVerticalScrollIndicator={false}
        >
          {/* Greeting Panel */}

          <View style={styles.TitleView}>
            <Text style={styles.welcome}>
              Good {greetings}, {user.first_name}
            </Text>
            <Text style={styles.slogan}>Let's find the perfect</Text>
            <Text style={styles.title}>Electric Vehicle ⚡ </Text>
          </View>

          {/* Banner panel */}

          <HomeBanner />

          {/* Categore selection Panel */}

          <CategorySelection selected={SelectedCategory} />

          {/* Brand scroll Panel */}

          {!empty && <BrandScroll companyList={companyList} />}

          {/* Car Scroll Panel */}

          {!empty && <CarScroll vehicleList={vehicleList} />}

          {/* Coming Soon Panel */}

          {empty && (
            <View style={styles.commingSoon}>
              <AnimatedLottieView
                style={styles.lottie}
                autoPlay={true}
                source={require("../../../assets/lottie-files/21538-timer-countdown.json")}
              />
              <Text style={styles.comingText}>Coming Soon</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Homescreen;
