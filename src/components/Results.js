import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

import NoMovieGeneric from "./NoMovieGeneric";

const Results = ({ movies }) => {
  console.log(movies.results);
  return (
    <div className="row container">
      {movies === undefined || movies.length <= 0 ? (
        <NoMovieGeneric msg="No Favorite Movies Yet !" />
      ) : (
        movies.length && movies.map((el) => <Item info={el} key={el.id} />)
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
