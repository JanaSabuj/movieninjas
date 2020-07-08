import { SET_UPDATE_TRENDING, SET_UPDATE_FAVORITES } from "./movieTypes";

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

    console.log(newData);
    dispatch(setUpdateTrending(newData));
  };
};

export const updateFavorites = (movieItem) => {
  return (dispatch) => {
    console.log(movieItem);
    dispatch(setUpdateFavorites(movieItem));
  };
};

export const setUpdateTrending = (movieData) => {
  return {
    type: SET_UPDATE_TRENDING,
    payload: movieData,
  };
};

export const setUpdateFavorites = (movieItem) => {
  return {
    type: SET_UPDATE_FAVORITES,
    payload: movieItem,
  };
};
