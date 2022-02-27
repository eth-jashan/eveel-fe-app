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
import styles from "./Styles/SelectoptionUtilStyles";
const SelectOptionUtil = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ margin: 15 }}>
        <Text style={styles.title}>Select Pre-Owned Vehicle</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.select("car");
        }}
      >
        <AnimatedLottieView
          style={styles.lottie}
          autoPlay={true}
          source={require("../../../../assets/lottie-files/60229-car-animation.json")}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </TouchableOpacity>
      <View style={styles.or}>
        <Text style={styles.orText}>Or</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.select("twoWheeler");
        }}
      >
        <AnimatedLottieView
          style={styles.lottie}
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
