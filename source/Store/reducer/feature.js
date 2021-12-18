import { FETCH_FEATURE } from "../action/feature";

const initialState = {
  featureList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURE:
      return {
        ...state,
        featureList: action.data,
      };
    default:
      return state;
  }
};
