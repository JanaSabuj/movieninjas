import {
  SET_UPDATE_TRENDING,
  SET_UPDATE_FAVORITES,
  SET_DELETE_FAVORITES,
  SET_RESULTS,
  SET_ADD_TRENDING,
  SET_REMOVE_TRENDING,
  SET_SEARCH_LOADING,
  SET_REFRESH_STATE,
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

export const addTrending = (movieItem) => {
  return (dispatch) => {
    console.log(movieItem);
    dispatch(setAddTrending(movieItem));
  };
};

export const deleteFavorites = (movieId) => {
  return (dispatch, getState) => {
    // console.log(getState().movieReducer); // global state
    dispatch(setDeleteFavorites(movieId));
  };
};

export const removeTrending = (movieItem) => {
  return (dispatch) => {
    console.log(movieItem);
    dispatch(setRemoveTrending(movieItem));
  };
};

export const setSearchLoading = () => {
  return (dispatch) => {
    dispatch(setSearchLoadingUtil());
  };
};

export const refreshState = () => {
  return (dispatch) => {
    dispatch(setRefreshState());
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
        isTrending: false,
      });
    }
    dispatch(setResultsUtil(newData));
    console.log("state", newData);
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

export const setAddTrending = (movie) => {
  return {
    type: SET_ADD_TRENDING,
    payload: movie,
  };
};

export const setDeleteFavorites = (id) => {
  return {
    type: SET_DELETE_FAVORITES,
    payload: id,
  };
};

export const setRemoveTrending = (id) => {
  return {
    type: SET_REMOVE_TRENDING,
    payload: id,
  };
};

export const setResultsUtil = (data) => {
  return {
    type: SET_RESULTS,
    payload: data,
  };
};

export const setSearchLoadingUtil = () => {
  return {
    type: SET_SEARCH_LOADING,
  };
};

export const setRefreshState = () => {
  return {
    type: SET_REFRESH_STATE,
  };
};
