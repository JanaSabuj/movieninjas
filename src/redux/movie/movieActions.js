import { SET_UPDATE_TRENDING } from "./movieTypes";

export const updateTrending = (movieData) => {
  return (dispatch) => {
    dispatch(setUpdateTrending(movieData));
  };
};

export const setUpdateTrending = (movieData) => {
  return {
    type: SET_UPDATE_TRENDING,
    payload: movieData,
  };
};
