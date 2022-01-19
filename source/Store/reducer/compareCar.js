import { ADD_VEHCILE_1, ADD_VEHCILE_2 } from "../action/compareCar";

const initialState = {
  vehicle1: {},
  vehicle2: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHCILE_1:
      return {
        ...state,
        vehicle1: action.car,
      };
    case ADD_VEHCILE_2:
      return {
        ...state,
        vehicle2: action.car,
      };
    default:
      return state;
  }
};
