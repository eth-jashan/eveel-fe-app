import React, { useState, useRef, useEffect } from "react";
import { Dimensions, TextPropTypes, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Color from "../../../assets/Color";
import PNumber from "../../Component/Utils/NumberVerificationScreenUtil/Number";
import OTP from "../../Component/Utils/NumberVerificationScreenUtil/OTP";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { AddPhoneNumber } from "../../Store/action/auth";
import { getContacts } from "../../Store/action/contact";
const NumberVerification = (props) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inNumber, setinNumber] = useState(true);
  const [VerificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const [send, setsend] = useState({});

  const sendVerification = (num) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //console.log(phoneProvider, num);
    phoneProvider
      .verifyPhoneNumber(num, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((err) => {
        alert(err);
      });
    setinNumber(false);
  };

  const confirmCode = async (code) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      VerificationId,
      code
    );
    try {
      const response = await firebase.auth().signInWithCredential(credential);
      const token = await response.user.getIdToken(true);
      // `console.log("User :", response.additionalUserInfo.isNewUser);
      // console.log("Number :", response.user.phoneNumber);
      // console.log("Email :", response.user.email);
      // console.log("name ", response.user.displayName);
      // console.log("Token:", token);
      // console.log("UID:", response.user.uid);`
      setsend({
        number: response.user.phoneNumber,
        token: token,
        uid: response.user.uid,
      });
    } catch (err) {
      console.log(err.message);
      if (
        err.message ==
        "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user."
      ) {
        alert("Invalid OTP");
      }
    }
  };
  useEffect(() => {
    if (send.number) {
      dispatch(AddPhoneNumber(send.number, send.uid, send.token));
      dispatch(getContacts(send.uid));
    }
  }, [send]);

  const changeToOtp = (number) => {
    setPhoneNumber("+91" + number);
    sendVerification("+91" + number);
  };

  const ResendOTP = () => {
    //console.log(phoneNumber);
    sendVerification(phoneNumber);
  };

  const ValueOtp = (code) => {
    confirmCode(code);
  };
  return (
    <SafeAreaView style={styles.screen}>
      {inNumber && <PNumber change={changeToOtp} send={sendVerification} />}
      {!inNumber && <OTP sendCode={ValueOtp} resend={ResendOTP} />}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default NumberVerification;
