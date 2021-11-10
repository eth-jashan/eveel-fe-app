import { FETCH_CAR } from "../action/car";

const initialState = {
  carList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR:
      return {
        ...state,
        carList: action.data,
      };
    default:
      return state;
  }
};
