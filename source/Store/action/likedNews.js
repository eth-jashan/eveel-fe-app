import NewsModel from "../../../model/newsModel";

export const ADD_LIKEDNEWS = "ADD_LIKEDNEWS";
export const FETCH_LIKEDNEWS = "FETCH_LIKEDNEWS";
export const add_likedNews = (news) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const response = await fetch(
      `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/news.json?`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUri: news.imageUri,
          title: news.title,
          body: news.body,
          link: news.link,
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
      `https://eveels-c43bb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}/news.json?`
    );
    const resData = await response.json();
    const newsList = [];
    for (const key in resData) {
      newsList.push(
        new NewsModel(
          key,
          resData[key].imageUri,
          resData[key].title,
          resData[key].body,
          resData[key].link
        )
      );
    }
    dispatch({ type: FETCH_LIKEDNEWS, list: newsList });
  };
};
