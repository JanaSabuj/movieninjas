import React, { useState } from "react";

const Search = () => {
  const [localData, setLocalData] = useState("Search for a Movie");
  const handleClick = (e) => {
    setLocalData(e.target.value);
  };
  const handleSubmit = () => {
    console.log(localData);
  };
  return (
    <nav className="container searchbox">
      <div className="nav-wrapper grey lighten-5">
        <form>
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
              onClick={handleSubmit}
            >
              search
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Search;
