// rootReducer.js
import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  project: projectReducer,
});

export default rootReducer;
