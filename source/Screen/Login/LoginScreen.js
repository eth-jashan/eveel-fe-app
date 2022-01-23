import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import React from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import Color from "../../../assets/Color";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../Component/Common/GoogleLogin";
import { login } from "../../Store/action/auth";
const { width, height } = Dimensions.get("screen");

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

const styles = StyleSheet.create({
  screen: {
    height: height,
    width: width,
    backgroundColor: "black",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  image: {
    alignSelf: "center",
    maxWidth: 300,
    height: 300,
  },
  features: {
    fontFamily: "black",
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  FeatureSection: { alignSelf: "center" },
  FeatureSeparation: { fontFamily: "black", fontSize: 25, color: "#1ec0af" },
  imageSize: { width: "100%", height: "100%" },
  loginSection: { width: "100%", alignSelf: "center" },
  loginButtonFaceBook: {
    alignItems: "center",
    width: "94%",
    backgroundColor: Color.darkgreen,
    borderRadius: 12,
    padding: 12,
    alignSelf: "center",
  },
  loginButtonGoogle: {
    marginVertical: 16,
    alignItems: "center",
    width: "94%",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#d24736",
    alignSelf: "center",
  },
  LoginArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    width:'100%'
  },
  LoginText: {
    color: "white",
    fontFamily: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
});

export default LoginScreen;
