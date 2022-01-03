import { ADD_LIKEDNEWS, FETCH_LIKEDNEWS } from "../action/likedNews";

const initialState = {
  likedNewsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKEDNEWS:
      const list = [...state.likedNewsList];
      return {
        ...state,
        likedNewsList: list.concat(action.news),
      };
    case FETCH_LIKEDNEWS:
      return {
        ...state,
        likedNewsList: action.list,
      };
    default:
      return state;
  }
};
