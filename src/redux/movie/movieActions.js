import {
  SET_UPDATE_TRENDING,
  SET_UPDATE_FAVORITES,
  SET_DELETE_FAVORITES,
  SET_RESULTS,
} from "./movieTypes";

export const updateTrending = (movieData) => {
  return (dispatch) => {
    const newData = [];
    for (const movie of movieData) {
      newData.push({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        popularity: movie.popularity,
        rating: movie.vote_average,
        imgURL: movie.poster_path,
        isFavorite: false,
      });
    }

    // console.log(newData);
    dispatch(setUpdateTrending(newData));
  };
};

export const updateFavorites = (movieItem) => {
  return (dispatch) => {
    console.log(movieItem);
    dispatch(setUpdateFavorites(movieItem));
  };
};

export const deleteFavorites = (movieId) => {
  return (dispatch, getState) => {
    // console.log(getState().movieReducer); // global state
    dispatch(setDeleteFavorites(movieId));
  };
};

export const setResults = (data) => {
  return (dispatch) => {
    console.log(data.results);
    const newData = [];
    for (const movie of data.results) {
      newData.push({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        popularity: movie.popularity,
        rating: movie.vote_average,
        imgURL: movie.poster_path,
        isFavorite: false,
      });
    }
    dispatch(setResultsUtil(newData));
  };
};

export const setUpdateTrending = (movieData) => {
  return {
    type: SET_UPDATE_TRENDING,
    payload: movieData,
  };
};

export const setUpdateFavorites = (movie) => {
  return {
    type: SET_UPDATE_FAVORITES,
    payload: movie,
  };
};

export const setDeleteFavorites = (id) => {
  return {
    type: SET_DELETE_FAVORITES,
    payload: id,
  };
};

export const setResultsUtil = (data) => {
  return {
    type: SET_RESULTS,
    payload: data,
  };
};
