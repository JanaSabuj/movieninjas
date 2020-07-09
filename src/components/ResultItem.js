import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  updateFavorites,
  updateTrending,
  deleteFavorites,
  removeTrending,
  addTrending,
  setRefreshState,
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
  const { title, rating, release_date, imgURL, isFavorite, isTrending } = info;
  const imgPrefix = "https://image.tmdb.org/t/p/w500/";
  const handleClick = (id, isFavorite) => {
    if (isFavorite) {
      info.isFavorite = !info.isFavorite;
      deleteFavorites(id);
    } else {
      info.isFavorite = !info.isFavorite;

      let flag = false;
      for (let i = 0; i < favoriteMovies.length; i++) {
        if (favoriteMovies[i].id === id) {
          flag = true;
          break;
        }
      }
      if (flag) setRefreshState();
      else updateFavorites(info);
    }
  };

  const handleClick2 = (id, isTrending) => {
    if (isTrending) {
      info.isTrending = !info.isTrending;
      removeTrending(id);
    } else {
      let flag = false;
      info.isTrending = !info.isTrending;
      for (let i = 0; i < trendingMovies.length; i++) {
        if (trendingMovies[i].id === id) {
          flag = true;
          break;
        }
      }
      if (flag) setRefreshState();
      else addTrending(info);
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
                  {/* <span style={{ fontWeight: "bold" }}>Popularity:</span>{" "}
                  {Math.round(popularity)}%<br></br> */}
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
                      <i className="material-icons">favorite</i>{" "}
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
                      <i className="material-icons">trending_down</i>{" "}
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
    setRefreshState: () => dispatch(setRefreshState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultItem);
