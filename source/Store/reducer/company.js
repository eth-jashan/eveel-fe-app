import { FETCH_COMPANY } from "../action/company";

const initialState = {
  companyList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY:
      return {
        ...state,
        companyList: action.data,
      };
    default:
      return state;
  }
};
