import React from "react";

const Search = () => {
  return (
    <nav className="container searchbox">
      <div className="nav-wrapper grey lighten-5">
        <form>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" for="search">
              <i className="material-icons grey-text text-darken-4">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Search;
