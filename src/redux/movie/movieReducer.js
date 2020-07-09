import {
  SET_UPDATE_TRENDING,
  SET_UPDATE_FAVORITES,
  SET_DELETE_FAVORITES,
  SET_RESULTS,
  SET_ADD_TRENDING,
  SET_REMOVE_TRENDING,
} from "./movieTypes";

const initialState = {
  trendingMovies: [],
  favoriteMovies: [],
  resultMovies: [],
  searchResults: [],
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
    case SET_DELETE_FAVORITES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (x) => x.id !== action.payload
        ),
      };
    case SET_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_ADD_TRENDING:
      return {
        ...state,
        trendingMovies: [action.payload, ...state.trendingMovies],
      };
    case SET_REMOVE_TRENDING:
      return {
        ...state,
        trendingMovies: state.trendingMovies.filter(
          (x) => x.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
