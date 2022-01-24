import api_utils from "../../../assets/api";
import LikedCarModel from "../../../model/likedCarModel";

export const ADD_LIKED_CAR = "ADD_LIKED_CAR";

export const addLikedCar = (carId) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/likedCar.json?`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carId: carId,
        }),
      }
    );
    const resData = await response.json();
    const likedCar = new LikedCarModel(resData.name, carId);
    dispatch({ type: ADD_LIKED_CAR, car: likedCar });
  };
};

export const FETCH_LIKED_CAR = "FETCH_LIKED_CAR";

export const fetchLikedCar = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/likedCar.json?`
    );
    const resData = await response.json();
    const likeCarList = [];
    for (const key in resData) {
      likeCarList.push(new LikedCarModel(key, resData[key].carId));
    }
    dispatch({ type: FETCH_LIKED_CAR, list: likeCarList });
  };
};

export const DISLIKED_CAR = "DISLIKED_CAR";

export const dislikedCar = (carId) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const likedCarList = getState().likedCars.likedCarList;
    const arrayCar = likedCarList.filter((item) => item.carId == carId);
    const car = arrayCar[0];
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/likedCar/${car.key}.json?`,
      {
        method: "DELETE",
      }
    );
  };
};
