import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Text,
} from "react-native";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Transition, Transitioning } from "react-native-reanimated";
import StaggeringView from "../../Component/Common/StaggeringView";
import TitleInfo from "../../Component/Utils/CarListScreenUtils/TitleUtil";
import DetailView from "../../Component/Utils/CarListScreenUtils/DetailUtil";
import { useSelector } from "react-redux";
import Color from "../../../assets/Color";
import styles from "./HomeStyles/carListScreenStyles";

//constants

export const TITLE_SIZE = 50;
export const PRICE_SIZE = 40;
export const DURATION = 700;
const { width, height } = Dimensions.get("screen");

//Animation

const transition = (
  <Transition.Together>
    <Transition.Out
      type="slide-bottom"
      interpolation="easeIn"
      durationMs={DURATION}
    />
    <Transition.Change />
    <Transition.In
      type="slide-bottom"
      interpolation="easeOut"
      durationMs={DURATION}
    />
  </Transition.Together>
);

const CarListScreen = ({ navigation, route }) => {
  //from props

  const List = route.params.list
    ? route.params.list
    : useSelector((x) => x.car.vehicleList);
  const catid = route.params?.id;

  //constants

  let carList = List;

  //For specific company

  if (catid !== undefined) {
    carList = List?.filter((item) => item.companyId == catid);
  }

  //Input state

  const [index, setIndex] = useState(0);

  //ref

  const activeIndex = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;
  const ref = useRef();

  /***********UseEffect***********/

  useEffect(() => {
    Animated.timing(animation, {
      toValue: activeIndex,
      duration: DURATION * 0.7,
      useNativeDriver: true,
    }).start();
  }, []);

  /***********functions**********/

  const setActiveIndex = useCallback((newIndex) => {
    activeIndex.setValue(newIndex);
    ref.current.animateNextTransition();
    setIndex(newIndex);
  });

  const transformY = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [height, 0, -height],
  });

  return (
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={(ev) => {
        if (index === carList.length - 1) {
          return;
        }
        if (ev.nativeEvent.state === State.END) {
          setActiveIndex(index + 1);
        }
      }}
    >
      {/* Gesture Handler Panel */}

      <FlingGestureHandler
        key="down"
        direction={Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (index === 0) {
            return;
          }
          if (ev.nativeEvent.state === State.END) {
            setActiveIndex(index - 1);
          }
        }}
      >
        {/* Content Panel */}

        <SafeAreaView style={styles.screen}>
          {/* Animation Panel */}

          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                height: height * carList.length,
                transform: [{ translateY: transformY }],
              },
            ]}
          >
            {carList.map((item, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.carlist,
                    { backgroundColor: i % 2 === 0 ? "black" : "white" },
                  ]}
                ></View>
              );
            })}
          </Animated.View>

          {/* Transition Panel */}

          <Transitioning.View
            ref={ref}
            transition={transition}
            style={{ width: width }}
          >
            {/* Title panel */}

            <TitleInfo
              title_size={TITLE_SIZE}
              index={index}
              color={index % 2 === 0 ? "white" : "black"}
              text={carList[index].name}
            />

            {/* Detail Panel */}

            <DetailView
              data={carList}
              index={index}
              color={index % 2 === 0 ? "white" : "black"}
            />

            {/* Car Animation panel */}

            <StaggeringView delay={1000} key={index} style={styles.carAnimate}>
              <Image
                style={styles.car}
                source={{
                  uri: carList[index].sideView,
                }}
                resizeMode="contain"
              />
            </StaggeringView>
          </Transitioning.View>

          {/* TO Car Profile Button Panel */}

          <Pressable
            //key={`priceInfo-${index}`}
            style={styles.button}
            onPress={() => {
              //console.log('heyyyy', carList[index])
              navigation.navigate("CarProfile", {
                item: carList[index],
                list: List,
              });
            }}
          >
            <Text style={styles.buttonText}>Take a Tour</Text>
          </Pressable>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default CarListScreen;
