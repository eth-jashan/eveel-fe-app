import api_utils from "../../../assets/api";
import endPoints from "../../../assets/endpoints";
import CarModel from "../../../model/carModel";

export const FETCH_CAR = "FETCH_CAR";

export const fetchCarModel = () => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.vehicle_details}.json?`
    );
    const resData = await response.json();
    const vehicleList = [];
    const carList = [];
    const scootyList = [];
    for (const key in resData) {
      vehicleList.push(
        new CarModel(
          key,
          resData[key].catId,
          resData[key].name,
          resData[key].photo,
          resData[key].time,
          resData[key].range,
          resData[key].speed,
          resData[key].horse,
          resData[key].torque,
          resData[key].startingP,
          resData[key].youtube,
          resData[key].Description,
          resData[key].brand,
          resData[key].type,
          resData[key].IsIndian,
          resData[key].TestDrive,
          resData[key].sideview
        )
      );
      if (resData[key].type === "car") {
        carList.push(
          new CarModel(
            key,
            resData[key].catId,
            resData[key].name,
            resData[key].photo,
            resData[key].time,
            resData[key].range,
            resData[key].speed,
            resData[key].horse,
            resData[key].torque,
            resData[key].startingP,
            resData[key].youtube,
            resData[key].Description,
            resData[key].brand,
            resData[key].type,
            resData[key].IsIndian,
            resData[key].TestDrive,
            resData[key].sideview
          )
        );
      } else if (resData[key].type === "twoWheeler") {
        scootyList.push(
          new CarModel(
            key,
            resData[key].catId,
            resData[key].name,
            resData[key].photo,
            resData[key].time,
            resData[key].range,
            resData[key].speed,
            resData[key].horse,
            resData[key].torque,
            resData[key].startingP,
            resData[key].youtube,
            resData[key].Description,
            resData[key].brand,
            resData[key].type,
            resData[key].IsIndian,
            resData[key].TestDrive,
            resData[key].sideview
          )
        );
      }
    }
    dispatch({
      type: FETCH_CAR,
      carList: carList,
      vehicleList: vehicleList,
      scootyList: scootyList,
    });
  };
};
