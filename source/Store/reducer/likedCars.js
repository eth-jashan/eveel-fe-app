import { LIKED_CAR, FETCH_LIKED_CAR, DISLIKED_CAR } from "../action/likedCars";

const initialState = {
  likedCarList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIKED_CAR:
      // console.log("AAAA===>", action.likedcar);
      // const list = [...state.likedCarList];
      // return {
      //   ...state,
      //   likedCarList: list.concat(action.likedcar),
      // };
      const list = [state.likedCarList];
      console.log("list==>", list);
      console.log(action.likedcar);
      return {
        ...state,
        likedCarList: list.concat(action.likedcar),
      };
    case FETCH_LIKED_CAR:
      return {
        ...state,
        likedCarList: action.likedCarList,
      };
    default:
      return state;
  }
};
