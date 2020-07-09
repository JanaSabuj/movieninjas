import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Item from "./Item";
import { top_rated as topRatedURL } from "../api/Api";

import { updateTrending } from "../redux/movie/movieActions";
import Preloader from "./Preloader";
import NoMovieGeneric from "./NoMovieGeneric";

const Trending = ({ movies, updateTrending }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (movies.length === 0) {
      console.log("triggered Trending");
      setLoading(true);
      axios
        .get(topRatedURL)
        .then((res) => {
          updateTrending(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    }
  }, [updateTrending, movies.length]);

  return (
    <div className="row container">
      {error ? (
        <NoMovieGeneric msg="Network Problem !" />
      ) : loading ? (
        <Preloader />
      ) : (
        movies.length && movies.map((el) => <Item info={el} key={el.id} />)
      )}
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
