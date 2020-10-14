import { combineReducers } from "redux";

//reducers
import posts from "./postReducer";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
