import CarModel from "../../../model/carModel";

export const FETCH_CAR = "FETCH_CAR";

export const fetchCarModel = () => {
  return async (dispatch, getState) => {
    const response = await fetch("");
    const resData = await response.json();

    const carList = [];

    console.log("CarLise====>", resData);

    for (const key in resData) {
      carList.push(
        new CarModel(
          key,
          resData[key].companyId,
          resData[key].name,
          resData[key].coverPhoto,
          resData[key].battery,
          resData[key].range,
          resData[key].speed,
          resData[key].horse,
          resData[key].torque,
          resData[key].startPrice,
          resData[key].youtube,
          resData[key].description
        )
      );
    }

    dispatch({ type: FETCH_CAR, data: carList });
  };
};
