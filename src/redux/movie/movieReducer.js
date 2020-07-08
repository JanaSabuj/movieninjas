import { SET_UPDATE_TRENDING } from "./movieTypes";

const initialState = {
  trendingMovies: [],
  favoriteMovies: [],
  resultMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPDATE_TRENDING:
      return {
        ...state,
        trendingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
