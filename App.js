import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNav from "./source/NavigationStack/MainStack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./source/Store/Store";
import firebase from "firebase";
import { firebaseConfig } from "./firbase";
import * as GoogleSignIn from 'expo-google-sign-in';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// const initAsync = async () => {
//   await GoogleSignIn.initAsync({
//     // You may ommit the clientId when the firebase `googleServicesFile` is configured
//     clientId: '<YOUR_IOS_CLIENT_ID>',
//   });
//   this._syncUserWithStateAsync();
// };

const fontLoading = () => {
  return Font.loadAsync({
    black: require("./assets/fonts/Montserrat-Black.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    book: require("./assets/fonts/AirbnbCereal-Book.ttf"),
    extraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    light: require("./assets/fonts/Montserrat-Light.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    logo: require("./assets/fonts/Montserrat-Regular.ttf"),
    extralight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    semibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    thin: require("./assets/fonts/Montserrat-Thin.ttf"),
    header: require("./assets/fonts/future-earth.ttf"),
    car: require("./assets/fonts/Dodgv2.ttf"),
  });
};

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fontLoading}
        onFinish={() => setFontLoad(true)}
        onError={(test) => {
          throw new Error(Text);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
