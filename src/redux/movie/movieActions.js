import axios from "axios";
import { SET_UPDATE_TRENDING } from "./movieTypes";

export const updateTrending = (movieData) => {
  return (dispatch) => {
    console.log(movieData);
    dispatch(setUpdateTrending(movieData));
  };
};

export const setUpdateTrending = (movieData) => {
  return {
    type: SET_UPDATE_TRENDING,
    payload: movieData,
  };
};
