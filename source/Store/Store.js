import { applyMiddleware, createStore, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import CompanyReducer from "./reducer/company";
import CarReducer from "./reducer/car";
const reducer = combineReducers({
  company: CompanyReducer,
  car: CarReducer,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
