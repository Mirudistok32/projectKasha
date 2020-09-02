import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import itemReducer from "./item-reducer";
import aphorismsReducer from "./aphorisms-reducer";
import calcFinanceReducer from "./calcFinance-reducer";

const reducers = combineReducers({
  itemReducer,
  aphorismsReducer,
  calcFinanceReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
