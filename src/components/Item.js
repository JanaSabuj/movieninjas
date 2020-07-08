import React from "react";
import { connect } from "react-redux";

import { updateFavorites, updateTrending } from "../redux/movie/movieActions";

const Item = ({
  info,
  favoriteMovies,
  trendingMovies,
  updateFavorites,
  updateTrending,
}) => {
  const { title, rating, release_date, popularity, imgURL, isFavorite } = info;
  const imgPrefix = "https://image.tmdb.org/t/p/w500/";
  const handleClick = (id, isFavorite) => {
    // console.log("click", id, isFavorite);
    // console.log(favoriteMovies, trendingMovies);

    if (isFavorite) {
    } else {
      info.isFavorite = !info.isFavorite;
      updateFavorites(info);
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
                  {title}
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
                    isFavorite ? "btn red darken-1" : "btn green darken-1"
                  }
                  onClick={() => handleClick(info.id, isFavorite)}
                >
                  {isFavorite ? (
                    <> </>
                  ) : (
                    <>
                      Fav{" "}
                      <i className="material-icons right ">favorite_border</i>{" "}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
