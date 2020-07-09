import React, { useState } from "react";
import { queryURL, API_KEY } from "../api/Api";
import { connect } from "react-redux";

import axios from "axios";
import { useHistory } from "react-router-dom";

import { setResults, setSearchLoading } from "../redux/movie/movieActions";

const Search = ({ setResults, movies, setSearchLoading }) => {
  const [localData, setLocalData] = useState("Search for a Movie");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    setLocalData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard/searchResult");
    setLoading(true);
    const queryParams = {
      api_key: API_KEY,
      query: localData,
    };

    const queryString = new URLSearchParams(queryParams).toString();
    const URL = queryURL + queryString;
    setSearchLoading(true);

    axios
      .get(URL)
      .then((el) => {
        setResults(el.data);
        setLoading(false);
        setSearchLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setSearchLoading(false);
      });
  };

  return (
    <nav className="container searchbox">
      <div className="nav-wrapper grey lighten-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder={localData}
              onChange={(e) => handleClick(e)}
              required
            />
            {loading ? (
              <i
                className="material-icons red-text text-darken-4"
                onClick={(e) => handleSubmit(e)}
              >
                motion_photos_on
              </i>
            ) : (
              <i
                className="material-icons grey-text text-darken-4"
                onClick={(e) => handleSubmit(e)}
              >
                search
              </i>
            )}
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setResults: (data) => dispatch(setResults(data)),
    setSearchLoading: () => dispatch(setSearchLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
