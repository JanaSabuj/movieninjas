import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  updateFavorites,
  updateTrending,
  deleteFavorites,
  removeTrending,
  addTrending,
} from "../redux/movie/movieActions";

const ResultItem = ({
  info,
  favoriteMovies,
  trendingMovies,
  updateFavorites,
  updateTrending,
  deleteFavorites,
  removeTrending,
  addTrending,
}) => {
  const {
    title,
    rating,
    release_date,
    popularity,
    imgURL,
    isFavorite,
    isTrending,
  } = info;
  const imgPrefix = "https://image.tmdb.org/t/p/w500/";
  const handleClick = (id, isFavorite) => {
    if (isFavorite) {
      info.isFavorite = !info.isFavorite;
      deleteFavorites(id);
    } else {
      info.isFavorite = !info.isFavorite;
      updateFavorites(info);
    }
  };

  const handleClick2 = (id, isTrending) => {
    if (isTrending) {
      info.isTrending = !info.isTrending;
      removeTrending(id);
    } else {
      info.isTrending = !info.isTrending;
      addTrending(info);
    }
  };

  return (
    <>
      {imgURL === null ? (
        <> </>
      ) : (
        <div className="col s12 m6">
          <div className="card horizontal">
            <div className="card-image">
              <img
                src={imgPrefix + imgURL}
                alt={title}
                style={{ width: "320px", height: "320px" }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div>
                  <hr></hr>
                  <Link
                    to={"/details/" + info.id}
                    className="nav-link"
                    style={{ fontWeight: "bold" }}
                  >
                    {title}{" "}
                  </Link>
                  <hr></hr>
                  <span style={{ fontWeight: "bold" }}>Release:</span>{" "}
                  {release_date}
                  <br></br>
                  <span style={{ fontWeight: "bold" }}>Popularity:</span>{" "}
                  {Math.round(popularity)}%<br></br>
                  <span style={{ fontWeight: "bold" }}>Rating:</span> {rating}
                </div>
              </div>
              <div className="card-action">
                <div
                  className={
                    isFavorite
                      ? "btn waves-effect waves-light red darken-1"
                      : "btn waves-effect waves-light green darken-1"
                  }
                  style={{ textAlign: "left" }}
                  onClick={() => handleClick(info.id, isFavorite)}
                >
                  {isFavorite ? (
                    <>
                      UNFAV<i className="material-icons right">favorite</i>{" "}
                    </>
                  ) : (
                    <>
                      Fav{" "}
                      <i className="material-icons right ">favorite_border</i>{" "}
                    </>
                  )}
                </div>
              </div>
              <div className="card-action">
                <div
                  className={
                    isTrending
                      ? "btn waves-effect waves-light red darken-1"
                      : "btn waves-effect waves-light green darken-1"
                  }
                  style={{ textAlign: "left" }}
                  onClick={() => handleClick2(info.id, isTrending)}
                >
                  {isTrending ? (
                    <>
                      DEL<i className="material-icons right">trending_down</i>{" "}
                    </>
                  ) : (
                    <>
                      ADD <i className="material-icons right ">trending_up</i>{" "}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    trendingMovies: state.movieReducer.trendingMovies,
    favoriteMovies: state.movieReducer.favoriteMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTrending: (data) => dispatch(updateTrending(data)),
    updateFavorites: (data) => dispatch(updateFavorites(data)),
    deleteFavorites: (data) => dispatch(deleteFavorites(data)),
    removeTrending: (data) => dispatch(removeTrending(data)),
    addTrending: (data) => dispatch(addTrending(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultItem);
