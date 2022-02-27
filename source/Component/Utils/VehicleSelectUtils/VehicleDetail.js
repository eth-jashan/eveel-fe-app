import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Color from "../../../../assets/Color";
import AnimatedLottieView from "lottie-react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Styles/VehicleDetailStyles";
const VehicleDetail = (props) => {
  //Input States
  const [carName, setCarName] = useState("");
  const [isCarnameValid, setCarNameValid] = useState(true);
  const [carMileage, setCarMileage] = useState("");
  const [isCarMileageValid, setCarMileageValid] = useState(true);

  //From Props

  const url =
    props.selected === "car"
      ? require("../../../../assets/lottie-files/60229-car-animation.json")
      : require("../../../../assets/lottie-files/86989-scooter.json");
  /************Functions**********/

  const validate = () => {
    if (!carName) {
      setCarNameValid(false);
    }
    if (!carMileage) {
      setCarMileageValid(false);
    }
    if (!/^\d+$/.test(carMileage)) {
      setCarMileageValid(false);
    }
    if (carName && carMileage && /^\d+$/.test(carMileage)) {
      props.submit(carName, carMileage);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.screen}>
      {/* Car Lottie Panel */}

      <AnimatedLottieView
        style={styles.lottie}
        autoPlay={true}
        source={url}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />

      {/* Title Panel */}

      <View style={styles.title}>
        <Text style={styles.titleText}>Enter Details of Your Vehicle</Text>
      </View>

      {/* Input Panel  */}

      {/* Car Name Panel */}

      <View style={styles.title}>
        <Text style={styles.inputTitle}>Vehicle Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCarName}
          value={carName}
        />
        {!isCarnameValid && (
          <Text style={styles.error}>Pls enter Valid Name</Text>
        )}
      </View>

      {/* Car Mileage Panel */}

      <View style={styles.title}>
        <Text style={styles.inputTitle}>Vehicle Mileage:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCarMileage}
          value={carMileage}
        />
        {!isCarMileageValid && (
          <Text style={styles.error}>Pls enter Valid Mileage</Text>
        )}
      </View>

      {/* Submit Button Panel */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          validate();
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VehicleDetail;
