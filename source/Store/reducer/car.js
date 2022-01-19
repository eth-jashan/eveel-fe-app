import { FETCH_CAR } from "../action/car";

const initialState = {
  carList: [],
  vehicleList: [],
  scootyList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR:
      return {
        ...state,
        carList: action.carList,
        vehicleList: action.vehicleList,
        scootyList: action.scootyList,
      };
    default:
      return state;
  }
};
