import movieReducer from "./movie/movieReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movieReducer"],
};

const rootReducer = combineReducers({
  movieReducer: movieReducer,
});

export default persistReducer(persistConfig, rootReducer);
