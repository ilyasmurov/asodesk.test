import { combineReducers } from "redux";
import popup from "./popup";
import stats from "./stats";

const rootReducer = combineReducers({
  popup,
  stats
});

export default rootReducer;
