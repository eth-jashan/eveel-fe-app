import { ADD_LIKED_CAR, FETCH_LIKED_CAR } from "../action/likedCars";

const initialState = {
  likedCarList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKED_CAR:
      const list = [...state.likedCarList];
      return {
        ...state,
        likedCarList: list.concat(action.car),
      };
    case FETCH_LIKED_CAR:
      return {
        ...state,
        likedCarList: action.list,
      };
    default:
      return state;
  }
};
