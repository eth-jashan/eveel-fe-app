import { FETCH_STATION } from "../action/station";

const initialState = {
  stationList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATION:
      return {
        ...state,
        stationList: action.list,
      };
    default:
      return state;
  }
};
