import { applyMiddleware, createStore, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import CompanyReducer from "./reducer/company";
import CarReducer from "./reducer/car";
import authReducer from "./reducer/auth";
import featureReducer from "./reducer/feature";
const reducer = combineReducers({
  company: CompanyReducer,
  car: CarReducer,
  auth: authReducer,
  feature: featureReducer,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
