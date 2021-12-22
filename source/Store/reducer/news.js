import { FETCH_NEWS } from "../action/news";

const initalState = {
  newsList: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsList: action.news,
      };
    default:
      return state;
  }
};
