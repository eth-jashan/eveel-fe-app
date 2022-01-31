import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Color from "../../../../assets/Color";
import AnimatedLottieView from "lottie-react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
const VehicleDetail = (props) => {
  const [carName, setCarName] = useState("");
  const [isCarnameValid, setCarNameValid] = useState(true);
  const [carMileage, setCarMileage] = useState("");
  const [isCarMileageValid, setCarMileageValid] = useState(true);
  useEffect(() => {
    console.log(carName);
  }, [carName]);
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
  const url =
    props.selected === "car"
      ? require("../../../../assets/lottie-files/60229-car-animation.json")
      : require("../../../../assets/lottie-files/86989-scooter.json");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.black }}>
      <AnimatedLottieView
        style={{
          alignSelf: "center",
          maxWidth: 300,
          height: 300,
        }}
        autoPlay={true}
        source={url}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Enter Details of Your Vehicle
        </Text>
      </View>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "medium",
            color: "white",
          }}
        >
          Vehicle Name:
        </Text>
        <TextInput
          style={{
            backgroundColor: Color.darkgrey,
            padding: 20,
            marginTop: 10,
            borderRadius: 15,
            fontFamily: "bold",
            color: "white",
            fontSize: 20,
          }}
          onChangeText={setCarName}
          value={carName}
        />
        {!isCarnameValid && (
          <Text
            style={{
              fontSize: 18,
              fontFamily: "medium",
              color: "white",
            }}
          >
            Pls enter Valid Name
          </Text>
        )}
      </View>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "medium",
            color: "white",
          }}
        >
          Vehicle Mileage:
        </Text>
        <TextInput
          style={{
            backgroundColor: Color.darkgrey,
            padding: 20,
            marginTop: 10,
            borderRadius: 15,
            fontFamily: "bold",
            color: "white",
            fontSize: 20,
          }}
          onChangeText={setCarMileage}
          value={carMileage}
        />
        {!isCarMileageValid && (
          <Text
            style={{
              fontSize: 18,
              fontFamily: "medium",
              color: "white",
            }}
          >
            Pls enter Valid Mileage
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={{
          marginVertical: 30,
          alignItems: "center",
          width: "94%",
          borderRadius: 12,
          padding: 12,
          backgroundColor: Color.lightgreen,
          alignSelf: "center",
        }}
        onPress={() => {
          validate();
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VehicleDetail;
