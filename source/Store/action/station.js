import api_utils from "../../../assets/api";
import endPoints from "../../../assets/endpoints";
import PumpStation from "../../../model/pumpStationModel";
export const FETCH_STATION = "FETCH_STATION";

export const fetch_station = () => {
  return async (dispatch) => {
    const response = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.station_details}.json?`
    );
    const resData = await response.json();
    const stationList = [];
    for (const key in resData) {
      stationList.push(
        new PumpStation(
          key,
          resData[key].Address,
          resData[key].Lat,
          resData[key].Long,
          resData[key].Station
        )
      );
    }
    dispatch({ type: FETCH_STATION, list: stationList });
  };
};
