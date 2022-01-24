import { applyMiddleware, createStore, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import CompanyReducer from "./reducer/company";
import CarReducer from "./reducer/car";
import authReducer from "./reducer/auth";
import featureReducer from "./reducer/feature";
import newsReducer from "./reducer/news";
import likedNewsReducer from "./reducer/likedNews";
import compareCarReducer from "./reducer/compareCar";
import pumpStationReducer from "./reducer/station";
import likedCarsReducer from "./reducer/likedCars";
const reducer = combineReducers({
  company: CompanyReducer,
  car: CarReducer,
  auth: authReducer,
  feature: featureReducer,
  news: newsReducer,
  likedNews: likedNewsReducer,
  compareCar: compareCarReducer,
  pumpStation: pumpStationReducer,
  likedCars: likedCarsReducer,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
