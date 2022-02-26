import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import Color from "../../../assets/Color";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../Component/Common/GoogleLogin";
import { login } from "../../Store/action/auth";
import { getContacts } from "../../Store/action/contact";
import styles from "./LoginStyles/LoginScreenStyles";


const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const GoogleSignIn = async () => {
    try {
      const result = await googleLogin();
      //console.log("Result===>", result);
      const name = result.user.providerData[0].displayName.split(" ");
      //console.log(name);
      await dispatch(
        login(
          name[0],
          name[1],
          result.user.providerData[0].email,
          result.user.uid,
          result.credential.oauthIdToken
        )
      );
      dispatch(getContacts(result.user.uid));
    } catch (err) {
      console.log(err);
    }
  };
  const NumberLogin = async () => {
    navigation.navigate("Phone");
  };
  return (
    <SafeAreaView style={styles.screen}>
      <AnimatedLottieView
        style={styles.image}
        autoPlay={true}
        source={require("../../../assets/lottie-files/50124-user-profile.json")}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <View style={styles.FeatureSection}>
        {/* <Text style={{fontFamily:'black', fontSize:22, color:'#1ec0af', alignSelf:'center'}}>One stop to</Text> */}
        <Text style={styles.features}>
          Explore
          <Text style={styles.FeatureSeparation}>.</Text>
          Buy
          <Text style={styles.FeatureSeparation}>.</Text>
          Recharge
          <Text style={styles.FeatureSeparation}>.</Text>
        </Text>
        {/* <Text style={{fontFamily:'black', fontSize:22, color:'#1ec0af', alignSelf:'center'}}>For your EV</Text> */}
        <View style={{ width: 250, height: 75 }}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/Images/header-logo.png")}
            style={styles.imageSize}
          />
        </View>
      </View>

      <View style={styles.loginSection}>
        <TouchableOpacity
          onPress={() => {
            NumberLogin();
          }}
          style={styles.loginButtonFaceBook}
        >
          <View style={styles.LoginArea}>
            <Feather name="phone" size={24} color="white" />
            <Text style={styles.LoginText}>Continue with number</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButtonGoogle}
          onPress={() => {
            GoogleSignIn();
          }}
        >
          <View style={styles.LoginArea}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={styles.LoginText}>Continue with google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
