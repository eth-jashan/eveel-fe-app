import { ADD_OWNED_CAR } from "../action/ownedCar";

const initialState = {
  carName: "",
  carMileage: "",
  carType: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_OWNED_CAR:
      return {
        ...state,
        carName: action.name,
        carMileage: action.mileage,
        carType: action.carType,
      };
    default:
      return state;
  }
};
