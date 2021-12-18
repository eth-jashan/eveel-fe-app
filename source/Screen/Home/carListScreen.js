import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Transition, Transitioning } from "react-native-reanimated";

import StaggeringView from "../../Component/Common/StaggeringView";

import TakeaTour from "../../Component/Utils/CarListScreenUtils/TakeaTourUtil";
import TitleInfo from "../../Component/Utils/CarListScreenUtils/TitleUtil";
import DetailView from "../../Component/Utils/CarListScreenUtils/DetailUtil";
import { data } from "../../../model/Data/cardata";
import { useSelector } from "react-redux";

export const TITLE_SIZE = 50;
export const PRICE_SIZE = 40;
export const DURATION = 700;

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

const { width, height } = Dimensions.get("screen");

const CarListScreen = ({ navigation, route }) => {
  const List = useSelector((x) => x.car.carList);
  //console.log(List);
  const catid = route.params?.id;
  const featureList = ["battery", "speed", "horsepower", "singleCharge"];
  const [index, setIndex] = useState(0);
  const activeIndex = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;
  const ref = useRef();

  let carList = List;
  //console.log(catid);
  //console.log(carList[0]);
  if (catid !== undefined) {
    carList = List.filter((item) => item.companyId == catid);
  }

  useEffect(() => {
    Animated.timing(animation, {
      toValue: activeIndex,
      duration: DURATION * 0.7,
      useNativeDriver: true,
    }).start();
  }, []);

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
        <SafeAreaView style={{ height: height, width: width }}>
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
                  style={{
                    height: height,
                    backgroundColor: i % 2 === 0 ? "black" : "white",
                    width: width,
                  }}
                ></View>
              );
            })}
          </Animated.View>
          <Transitioning.View
            ref={ref}
            transition={transition}
            style={{ width: width }}
          >
            <TitleInfo
              title_size={TITLE_SIZE}
              index={index}
              color={index % 2 === 0 ? "white" : "black"}
              text={carList[index].name}
            />
            <DetailView
              data={carList}
              index={index}
              color={index % 2 === 0 ? "white" : "black"}
            />

            <StaggeringView
              delay={1000}
              key={index}
              style={{ width: 315, height: 150, alignSelf: "center", top: 75 }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/eveels-testing.appspot.com/o/TATA-nex.png?alt=media&token=db1fab62-d471-49d1-8b95-40ef3319e451",
                }}
              />
            </StaggeringView>

            <TakeaTour
              size={PRICE_SIZE}
              data={carList[index]}
              index={index}
              color={"black"}
            />
          </Transitioning.View>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({});

export default CarListScreen;
