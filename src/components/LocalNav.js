import React from "react";
import { NavLink } from "react-router-dom";

const LocalNav = () => {
  return (
    <>
      <div className="section container left-align">
        <NavLink
          className="waves-effect waves-light btn blue-grey darken-4"
          style={{ marginRight: "10px", marginTop: "5px" }}
          to="/dashboard/trending"
          activeClassName="activeLinkGreen"
        >
          <i className="material-icons left">trending_up</i>
          Trending
        </NavLink>
        <NavLink
          className="waves-effect waves-light btn blue-grey darken-4"
          style={{ marginRight: "10px", marginTop: "5px" }}
          to="/dashboard/favorites"
          activeClassName="activeLinkRed"
        >
          <i className="material-icons left">favorite</i>Favorites
        </NavLink>
        <NavLink
          className="waves-effect waves-light btn blue-grey darken-4"
          style={{ marginRight: "10px", marginTop: "5px" }}
          to="/dashboard/searchResult"
          activeClassName="activeLinkYellow"
        >
          <i className="material-icons left">favorite</i>Results
        </NavLink>
        <div className="divider"></div>
      </div>
    </>
  );
};

export default LocalNav;
