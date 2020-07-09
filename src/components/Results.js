import React from "react";
import { connect } from "react-redux";

import NoMovieGeneric from "./NoMovieGeneric";
import ResultItem from "./ResultItem";

const Results = ({ movies }) => {
  console.log(movies);
  return (
    <div className="row container">
      {movies === undefined || movies.length <= 0 ? (
        <NoMovieGeneric msg="No Favorite Movies Yet !" />
      ) : (
        movies.length &&
        movies.map((el) => <ResultItem info={el} key={el.id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.searchResults,
  };
};

export default connect(mapStateToProps)(Results);
