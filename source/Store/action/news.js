import NewsModel from "../../../model/newsModel";
export const FETCH_NEWS = "FETCH_NEWS";

export const fetch_news = () => {
  return async (dispatch, getState) => {
    const response = await fetch(``);
    const resData = response.json();
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
    dispatch({ type: FETCH_NEWS, news: newsList });
  };
};
