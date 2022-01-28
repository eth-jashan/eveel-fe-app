import firebase from "firebase";
import * as Google from "expo-google-app-auth";

export const SecongGoogleSign = (googleUser) => {
  const credential = firebase.auth.GoogleAuthProvider.credential(
    googleUser.idToken,
    googleUser.accessToken
  );
  return firebase.auth().signInWithCredential(credential);
};

export const googleLogin = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        "402100750779-7nvno1plv3q97t94rlqlmppq7p4iem0p.apps.googleusercontent.com",
      behavior: "web",
      iosClientId:
        "402100750779-e9vd0ca9j7b7pavj3slsor3lg54u3idp.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
    if (result.type === "success") {
      const user = SecongGoogleSign(result);
      return user;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};
