import api_utils from "../../../assets/api";
import endPoints from "../../../assets/endpoints";
import featureModel from "../../../model/FeatureModel";

export const FETCH_FEATURE = "FETCH_FEATURE";

export const fetchfeature = () => {
  return async (dispatch) => {
    const response = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.feature_details}.json?`
    );
    const resData = await response.json();
    const featureList = [];
    for (const key in resData) {
      //console.log("key===>", resData[key]);
      featureList.push(
        new featureModel(
          resData[key].name,
          resData[key].feature,
          resData[key].image,
          resData[key].carid
        )
      );
    }
    //console.log("Feature===>", featureList);
    dispatch({ type: FETCH_FEATURE, data: featureList });
  };
};
