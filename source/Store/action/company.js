import CompanyModel from "../../../model/companyModel";

export const FETCH_COMPANY = "FETCH_COMPANY";

export const fetchCompany = () => {
  return async (dispatch, getState) => {
    const response = await fetch("");
    const resdata = await response.json();

    const companyList = [];
    for (const key in resdata) {
      companyList.push(
        new CompanyModel(
          key,
          resdata[key].logoImg,
          resdata[key].name,
          resdata[key].type,
          resdata[key].company,
          resdata[key].backgroundImg
        )
      );
    }

    dispatch({ type: FETCH_COMPANY, data: companyList });
  };
};
