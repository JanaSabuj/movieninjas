import React from "react";

const NoMovieGeneric = ({ msg }) => {
  const styleAbout = {
    fontSize: "20px",
  };

  return (
    <div>
      <>
        <div className="row" style={{ height: "75px" }} />
        <div className="row" style={styleAbout}>
          <div className="col s0 m3"> </div>
          <div className="col s12 m6">
            <div className="card grey lighten-3 hoverable">
              <div className="card-content black-text">
                <span className="card-title">
                  {" "}
                  <i className="material-icons black-text">visibility_off</i>
                </span>
                <p>{msg}</p>
              </div>
              <div className="card-action"></div>
            </div>
          </div>
          <div className="col s0 m3"> </div>
        </div>
      </>
    </div>
  );
};

export default NoMovieGeneric;
