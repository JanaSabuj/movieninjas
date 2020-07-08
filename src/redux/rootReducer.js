import movieReducer from "./movie/movieReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movieReducer: movieReducer,
});

export default rootReducer;
