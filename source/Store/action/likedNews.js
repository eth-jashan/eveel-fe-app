import NewsModel from "../../../model/newsModel";
import api_utils from "../../../assets/api";
export const ADD_LIKEDNEWS = "ADD_LIKEDNEWS";
export const FETCH_LIKEDNEWS = "FETCH_LIKEDNEWS";
export const add_likedNews = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/liked_news.json?`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newsId: id,
        }),
      }
    );
    const resData = await response.json();
    dispatch({ type: ADD_LIKEDNEWS, news: news });
  };
};

export const fetch_likedNews = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `${api_utils.baseURL_Demo}/users/${uid}/liked_news.json?`
    );
    const resData = await response.json();
    const newsIdList = [];
    for (const key in resData) {
      newsIdList.push(resData[key].newsId);
    }
    dispatch({ type: FETCH_LIKEDNEWS, list: newsIdList });
  };
};
