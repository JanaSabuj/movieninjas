import React from "react";
import { Link } from "react-router-dom";

const LocalNav = () => {
  return (
    <>
      <div className="section container left-align">
        <Link
          className="waves-effect waves-light btn blue-grey darken-4"
          style={{ marginRight: "10px", marginTop: "5px" }}
          to="/dashboard/trending"
        >
          <i className="material-icons left">trending_up</i>
          Trending
        </Link>
        <Link
          className="waves-effect waves-light btn blue-grey darken-4"
          style={{ marginRight: "10px", marginTop: "5px" }}
          to="/dashboard/favorites"
        >
          <i className="material-icons left">favorite</i>Favorites
        </Link>
        <Link
          className="waves-effect waves-light btn blue-grey darken-4"
          style={{ marginRight: "10px", marginTop: "5px" }}
          to="/dashboard/results"
        >
          <i className="material-icons right">search</i>Results
        </Link>
        <div className="divider"></div>
      </div>
    </>
  );
};

export default LocalNav;
