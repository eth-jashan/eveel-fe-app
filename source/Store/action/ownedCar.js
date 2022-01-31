import api_utils from "../../../assets/api";

export const ADD_OWNED_CAR = "ADD_OWNED_CAR";

export const addOwnedCar = (type, name, mileage) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/ownedCar.json?`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carType: type,
          carName: name,
          carMileage: mileage,
        }),
      }
    );
    const resData = await response.json();
    dispatch({
      type: ADD_OWNED_CAR,
      carType: type,
      name: name,
      mileage: mileage,
    });
  };
};

export const fetchOwnedCar = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/ownedCar.json?`
    );
    try {
      const resData = await response.json();
      var key;
      for (key in resData);
      console.log(resData[key]);
      dispatch({
        type: ADD_OWNED_CAR,
        carType: resData[key].carType,
        name: resData[key].carName,
        mileage: resData[key].carMileage,
      });
    } catch (err) {
      console.log("Add Car")
    }
  };
};
