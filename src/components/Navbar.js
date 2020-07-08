import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <NavLink
              to="/dashboard/trending"
              className="brand-logo center active"
            >
              movie ninjas
            </NavLink>

            <ul id="nav-mobile" className="right">
              <li>
                <NavLink to="/about">
                  {" "}
                  <strong>ABOUT </strong>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
