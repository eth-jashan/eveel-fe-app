import firebase from "firebase";
import * as Google from "expo-google-app-auth";
import { useState } from "react";

// const isUserEqual = (googleUser, firebaseUser) => {
//   if (firebaseUser) {
//     const providerData = firebaseUser.providerData;
//     for (let i = 0; i < providerData.length; i++) {
//       if (
//         providerData[i].providerId ===
//           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
//         providerData[i].uid === googleUser.getBasicProfile().getId()
//       ) {
//         // We don't need to reauth the Firebase connection.
//         return true;
//       }
//     }
//   }
//   return false;
// };

// export const GoogleonSignIn = async (googleUser) => {
//   //console.log("Google Auth Response", googleUser);
//   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
//   const unsubscribe = firebase
//     .auth()
//     .onAuthStateChanged(async (firebaseUser) => {
//       unsubscribe();
//       // Check if we are already signed-in Firebase with the correct user.
//       if (!isUserEqual(googleUser, firebaseUser)) {
//         // Build Firebase credential with the Google ID token.
//         const credential = firebase.auth.GoogleAuthProvider.credential(
//           googleUser.idToken,
//           googleUser.accessToken
//         );

//         // Sign in with credential from the Google user.
//         try {
//           const response = await firebase
//             .auth()
//             .signInWithCredential(credential);
//           const resData = await response;
//           console.log("resData===>", resData);
//         } catch {
//           (error) => {
//             console.log(error);
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.email;
//             // The credential that was used.
//             //Pls check with thisss
//             //const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//           };
//         }
//         // firebase
//         //   .auth()
//         //   .signInWithCredential(credential)
//         //   .then((result) => {
//         //     //console.log("user signed in", result.user);
//         //     userValue = result.user;
//         //     //console.log("userDetails===>", googleUser.user);
//         //   })
//         //   .catch((error) => {
//         //     console.log(error);
//         //     // Handle Errors here.
//         //     const errorCode = error.code;
//         //     const errorMessage = error.message;
//         //     // The email of the user's account used.
//         //     const email = error.email;
//         //     // The credential that was used.
//         //     //Pls check with thisss
//         //     //const credential = GoogleAuthProvider.credentialFromError(error);
//         //     // ...
//         //   });
//         // console.log(userValue);
//         // return userValue;
//       } else {
//         console.log("User already signed-in Firebase.");
//       }
//     });
// };

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
