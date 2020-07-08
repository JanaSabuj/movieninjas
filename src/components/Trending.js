import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Item from "./Item";
import { top_rated } from "../api/Api";

import { updateTrending } from "../redux/movie/movieActions";

const Trending = ({ movies, updateTrending }) => {
  useEffect(() => {
    console.log("Before call", movies);
    axios
      .get(top_rated)
      .then((res) => {
        console.log(top_rated);
        console.log(res.data.results);
        updateTrending(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row container">
      {movies.length && movies.map((el) => <Item info={el} key={el.id} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.trendingMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTrending: (data) => dispatch(updateTrending(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
