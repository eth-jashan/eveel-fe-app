import api_utils from "../../../assets/api";
import endPoints from "../../../assets/endpoints";
import CompanyModel from "../../../model/companyModel";

export const FETCH_COMPANY = "FETCH_COMPANY";

export const fetchCompany = (type = "car") => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `${api_utils.baseURL_Demo}${endPoints.company_details}.json?`
    );
    const resdata = await response.json();
    const companyList = [];
    for (const key in resdata) {
      if (type === resdata[key].type) {
        companyList.push(
          new CompanyModel(
            key,
            resdata[key].logoUrl,
            resdata[key].name,
            resdata[key].type,
            resdata[key].company,
            resdata[key].backgroundUrl
          )
        );
      }
    }
    dispatch({ type: FETCH_COMPANY, data: companyList });
  };
};