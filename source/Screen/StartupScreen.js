import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { LoggedInUser } from "../Store/action/auth";
import { fetchOwnedCar } from "../Store/action/ownedCar";

const StartupScreen = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);
  const car = useSelector((state) => state.ownedCar);
  const [isLogged, setIsLogged] = useState(false);
  const call_function = async (user) => {
    await dispatch(LoggedInUser(user.uid));
    await dispatch(fetchOwnedCar());
  };
  const checkifLoggedIn = async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await call_function(user);
        setIsLogged(true);
      } else {
        props.navigation.navigate("Login");
      }
    });
  };

  useEffect(() => {
    checkifLoggedIn();
  }, []);

  useEffect(() => {
    if (isLogged) {
      if (car.carName) {
        //console.log(car);
        props.navigation.navigate("Home");
      } else {
        props.navigation.navigate("SelectVehicle");
      }
    }
  }, [isLogged, car]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Images/header-logo.png")}
        style={{
          width: Dimensions.get("screen").width * 0.8,
          height: Dimensions.get("screen").height * 0.12,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StartupScreen;
