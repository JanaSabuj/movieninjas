import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  console.log(info);
  const { title, vote_average, release_date, popularity, poster_path } = info;
  const imgPrefix = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      {poster_path === null ? (
        <> </>
      ) : (
        <div class="col s12 m6">
          <div class="card horizontal">
            <div class="card-image">
              <img
                src={imgPrefix + poster_path}
                style={{ width: "320px", height: "320px" }}
              />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>
                  <hr></hr>
                  {title}
                  <hr></hr>
                  <span style={{ fontWeight: "bold" }}>Release:</span>{" "}
                  {release_date}
                  <br></br>
                  <span style={{ fontWeight: "bold" }}>Popularity:</span>{" "}
                  {Math.round(popularity)}%<br></br>
                  <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
                  {vote_average}
                </p>
              </div>
              <div class="card-action">
                <div className="btn">
                  Favorite <i className="material-icons left">favorite</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
