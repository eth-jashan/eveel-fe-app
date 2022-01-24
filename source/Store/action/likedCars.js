import api_utils from "../../../assets/api";
import LikedCarModel from "../../../model/likedCarModel";

export const DISLIKED_CAR = "DISLIKED_CAR";
export const FETCH_LIKED_CAR = "FETCH_CAR";
export const LIKED_CAR = "LIKED_CAR";

export const likedCars = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/likedCars.json?`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carId: id,
        }),
      }
    );
    const resData = await response.json();
    const likedcar = new LikedCarModel(Math.random(), id);
    console.log("LIDE+++++>", likedcar);
    dispatch({ type: LIKED_CAR, likedcar: likedcar });
  };
};

export const dislikedCar = (carId) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const cars = getState().likedCars.likedCarList;
    const carL = cars.filter((item) => item.carId === carId);
    console.log("DIS====>", carl);
    const car = carL[0];
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/likedCars/${car.id}.json?`,
      {
        method: "DELETE",
      }
    );
    const resData = await response.json();
  };
};

export const fetchLikedCar = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/liked_cars.json?`
    );
    const resData = await response.json();
    const car_list = [];
    for (const key in resData) {
      carId_list.push(new LikedCarModel(key, resData[key].carId));
    }
    dispatch({ type: FETCH_LIKED_CAR, likedCarList: car_list });
  };
};
