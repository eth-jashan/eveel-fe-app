export const LOGIN = "LOGIN";
export const PHONE = "PHONE";
export const login = (first_name, last_name, email_id, uid, token) => {
  return async (dispatch) => {
    const check = await fetch(
      `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/profile.json?`
    );
    const checkData = await check.json();
    if (!checkData) {
      const response = await fetch(
        `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/profile.json?`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name,
            last_name,
            email_id,
            token,
          }),
        }
      );
      const resData = await response.json();
    }
    dispatch({
      type: LOGIN,
      token: token,
      uid: uid,
      email_id: email_id,
      first_name: first_name,
      last_name: last_name,
    });
    //console.log(resData.name);
    //console.log(first_name, last_name, number, email_id, uid, token);
  };
};

export const AddPhoneNumber = (number, uid, token) => {
  return async (dispatch) => {
    //console.log(number, token, uid);
    const check = await fetch(
      `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/profile.json?`
    );
    const checkData = await check.json();
    if (!checkData) {
      const response = await fetch(
        `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/profile.json?`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            number,
            token,
          }),
        }
      );
      const resData = await response.json();
    }
    dispatch({
      type: "PHONE",
      uid: uid,
      number: number,
      token: token,
    });
  };
};

export const LoggedInUser = (uid) => {
  return async (dispatch) => {
    //console.log(uid);
    const response = await fetch(
      `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/profile.json?`
    );
    try {
      const resData = await response.json();
      let keys = "";
      for (keys in resData) {
      }
      //console.log(keys);
      if (resData[keys].number !== undefined) {
        dispatch({
          type: PHONE,
          number: resData[keys].number,
          token: resData[keys].token,
          uid: uid,
        });
      } else {
        dispatch({
          type: LOGIN,
          token: resData[keys].token,
          email_id: resData[keys].email_id,
          first_name: resData[keys].first_name,
          last_name: resData[keys].last_name,
          uid: uid,
        });
      }
    } catch {
      () => {
        console.log("hii");
      };
    }
  };
};

// export const googleLogin = () => {
//   return async (dispatch) => {
//     try {
//       const result = await Google.logInAsync({
//         //androidClientId: YOUR_CLIENT_ID_HERE,
//         behavior: "web",
//         iosClientId:
//           "402100750779-e9vd0ca9j7b7pavj3slsor3lg54u3idp.apps.googleusercontent.com",
//         scopes: ["profile", "email"],
//       });
//       if (result.type === "success") {
//         console.log("here");
//         GoogleSignIn(result);
//       } else {
//         return { cancelled: true };
//       }
//     } catch (e) {
//       return { error: true };
//     }
//   };
// };

// const checkLoginState = (response) => {
//   console.log(response);
//   if (response.authResponse) {
//     // User is signed-in Facebook.
//     var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
//       unsubscribe();
//       // Check if we are already signed-in Firebase with the correct user.
//       if (!isUserEqual(response.authResponse, firebaseUser)) {
//         // Build Firebase credential with the Facebook auth token.
//         var credential = firebase.auth.FacebookAuthProvider.credential(
//           response.authResponse.accessToken
//         );

//         // Sign in with the credential from the Facebook user.
//         firebase
//           .auth()
//           .signInWithCredential(credential)
//           .catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//           });
//       } else {
//         // User is already signed-in Firebase with the correct user.
//       }
//     });
//   } else {
//     //
//     console.log(" User is signed-out of Facebook.");
//     //firebase.auth().signOut();
//   }
// };

// export const facebookLogin = () => {
//   const appId = "597710977980656";
//   return async (dispatch) => {
//     try {
//       await Facebook.initializeAsync({
//         appId: appId,
//       });
//       const {
//         type,
//         token,
//         appId,
//         expirationDate,
//         permissions,
//         declinedPermissions,
//       } = await Facebook.logInWithReadPermissionsAsync({
//         permissions: ["public_profile"],
//       });
//       console.log(appId, permissions);
//       if (type === "success") {
//         // Get the user's name using Facebook's Graph API
//         // const response = await fetch(
//         //   `https://graph.facebook.com/me?access_token=${token}`
//         // );
//         const response = await fetch(
//           `https://graph.facebook.com/me?access_token=${token}`
//         );
//         // checkLoginState(await response.json());
//         console.log(await response.json());
//         const credential = firebase.auth.FacebookAuthProvider.credential(token);
//         firebase
//           .auth()
//           .signInWithCredential(credential)
//           .catch((err) => {
//             console.log(err);
//           });
//         //Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({ message }) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   };
// };
