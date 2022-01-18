import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import counterReducer from "./counter";

let rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default rootReducer;
