import { ADD_LIKEDNEWS, FETCH_LIKEDNEWS } from "../action/likedNews";

const initialState = {
  likedNewsIdList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKEDNEWS:
      const list = [...state.likedNewsIdList];
      return {
        ...state,
        likedNewsIdList: list.concat(action.news),
      };
    case FETCH_LIKEDNEWS:
      return {
        ...state,
        likedNewsIdList: action.list,
      };
    default:
      return state;
  }
};
