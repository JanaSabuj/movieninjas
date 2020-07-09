import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import { detailURL, API_KEY } from "../api/Api";

import Preloader from "./Preloader";

const Detail = ({ favoriteMovies, trendingMovies }) => {
  const [loading, setLoading] = useState(false);
  const [localData, setlocalData] = useState("");
  const id = useParams().movieId;
  const imgPrefix = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const URL = detailURL + id + "?api_key=" + API_KEY;
    setLoading(true);
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setlocalData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const {
    title,
    poster_path,
    imdb_id,
    overview,
    homepage,
    popularity,
    runtime,
    revenue,
    release_date,
    adult,
    budget,
    genres,
    original_language,
    production_companies,
  } = localData;
  const boldStyle = {
    fontWeight: "bold",
  };
  const alignStyle = {
    textAlign: "left",
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div class="col s12 m7 container">
          <h2 class="header white-text">{title}</h2>
          <div class="card">
            <div class="card-image">
              <img
                src={imgPrefix + poster_path}
                alt={title}
                className="responsive-img"
                style={{
                  width: "500px",
                  height: "500px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontSize: "10px",
                }}
              />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p style={alignStyle}>
                  {" "}
                  <span style={boldStyle}>Plot:</span> {overview}
                </p>
                <br></br>
                <p style={alignStyle}>
                  <span style={boldStyle}>IMDB ID:</span> {imdb_id}
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Original Language:</span>{" "}
                  {original_language}
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Homepage:</span>{" "}
                  {homepage === undefined ? (
                    ""
                  ) : homepage.length > 0 ? (
                    <a
                      href={homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {homepage}
                    </a>
                  ) : (
                    "No website"
                  )}{" "}
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Popularity:</span>{" "}
                  {Math.round(popularity)}%
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Runtime:</span> {runtime} mins
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Budget:</span> {budget} USD
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Revenue:</span> {revenue} USD
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Release Date:</span> {release_date}
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Adult Content:</span>{" "}
                  {adult ? "Yes" : "No"}
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Genres:</span>{" "}
                  {genres === undefined ? (
                    <> </>
                  ) : (
                    genres.map((x) => `${x.name}, `)
                  )}
                </p>
                <p style={alignStyle}>
                  <span style={boldStyle}>Productions:</span>{" "}
                  {production_companies === undefined ? (
                    <> </>
                  ) : (
                    production_companies.length &&
                    production_companies.map((x) => `${x.name}, `)
                  )}
                </p>
              </div>
              <div class="card-action">
                <Link
                  className="btn red"
                  style={{ marginRight: "10px", marginTop: "5px" }}
                  to="/dashboard/favorites"
                >
                  Back to Fav <i className="material-icons left">favorite</i>
                </Link>
                <Link
                  className="btn green"
                  style={{ marginTop: "5px" }}
                  to="/dashboard/trending"
                >
                  Back to Trending{" "}
                  <i className="material-icons right">trending_up</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
