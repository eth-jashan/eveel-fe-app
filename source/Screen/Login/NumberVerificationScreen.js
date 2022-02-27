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
import styles from "./LoginStyles/NumberVerificationScreenStyles";
const NumberVerification = (props) => {
  //hooks

  const dispatch = useDispatch();

  //Inout states

  const [phoneNumber, setPhoneNumber] = useState("");
  const [VerificationId, setVerificationId] = useState(null);
  const [send, setsend] = useState({});

  //Validation State

  const [inNumber, setinNumber] = useState(true);

  //Ref

  const recaptchaVerifier = useRef(null);

  /************UseEffect************/

  useEffect(() => {
    if (send.number) {
      dispatch(AddPhoneNumber(send.number, send.uid, send.token));
      dispatch(getContacts(send.uid));
    }
  }, [send]);

  /**********functions************/

  const sendVerification = (num) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
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

  /***********rendering***********/
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

export default NumberVerification;
