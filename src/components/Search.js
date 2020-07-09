import React, { useState } from "react";
import { queryURL, API_KEY } from "../api/Api";
import { connect } from "react-redux";

import axios from "axios";

import { setResults } from "../redux/movie/movieActions";

const Search = ({ setResults, movies }) => {
  const [localData, setLocalData] = useState("Search for a Movie");
  const handleClick = (e) => {
    setLocalData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = {
      api_key: API_KEY,
      query: localData,
    };

    const queryString = new URLSearchParams(queryParams).toString();
    const URL = queryURL + queryString;
    axios
      .get(URL)
      .then((el) => {
        setResults(el.data);
      })
      .catch((err) => {
        console.log(err);
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
            <i
              className="material-icons grey-text text-darken-4"
              onClick={(e) => handleSubmit(e)}
            >
              search
            </i>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
