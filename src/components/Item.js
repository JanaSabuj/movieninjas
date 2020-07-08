import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  console.log(info);
  const { Title, Year, imdbID, Type, Poster } = info;
  return (
    <div class="col s6 m6">
      <div class="card horizontal">
        <div class="card-image">
          <img src={Poster} />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>
              <hr></hr>
              {Title}
              <hr></hr>
              Year: {Year}
              <br></br>
              Genre: {Type}
              <br></br>
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
