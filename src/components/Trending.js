import React from "react";
import { connect } from "react-redux";

import Item from "./Item";

const Trending = ({ movies }) => {
  console.log(movies);
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

export default connect(mapStateToProps)(Trending);
