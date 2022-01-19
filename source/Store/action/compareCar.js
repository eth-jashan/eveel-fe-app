export const ADD_VEHCILE_1 = "ADD_VEHICLE_1";
export const ADD_VEHCILE_2 = "ADD_VEHICLE_2";
export const addVechile_1 = (car) => {
  return async (dispatch) => {
    dispatch({ type: ADD_VEHCILE_1, car: car });
  };
};
export const addVechile_2 = (car) => {
  return async (dispatch) => {
    dispatch({ type: ADD_VEHCILE_2, car: car });
  };
};
