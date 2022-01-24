import React from "react";
import {
  ColorPropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../../../../assets/Color";
import AnimatedLottieView from "lottie-react-native";
const SelectOptionUtil = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.black }}>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontFamily: "bold",
            color: "white",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Select Pre-Owned Vehicle
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.select("car");
        }}
      >
        <AnimatedLottieView
          style={{
            alignSelf: "center",
            maxWidth: 300,
            height: 300,
          }}
          autoPlay={true}
          source={require("../../../../assets/lottie-files/60229-car-animation.json")}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </TouchableOpacity>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontFamily: "bold",
            color: Color.lightgreen,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Or
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.select("twoWheeler");
        }}
      >
        <AnimatedLottieView
          style={{
            alignSelf: "center",
            maxWidth: 300,
            height: 300,
          }}
          autoPlay={true}
          source={require("../../../../assets/lottie-files/86989-scooter.json")}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectOptionUtil;
