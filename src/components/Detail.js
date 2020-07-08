import React from "react";

const Detail = () => {
  return (
    <div class="col s12 m7">
      <h2 class="header">Horizontal Card</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6" alt="i" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information.
            </p>
          </div>
          <div class="card-action">
            <a href="/#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
