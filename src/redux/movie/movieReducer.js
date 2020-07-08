import { SET_UPDATE_TRENDING, SET_UPDATE_FAVORITES } from "./movieTypes";

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

    case SET_UPDATE_FAVORITES:
      return {
        ...state,
        favoriteMovies: [action.payload, ...state.favoriteMovies],
      };
    default:
      return state;
  }
};

export default movieReducer;
