import React from "react";
import Search from "./Search";
import LocalNav from "./LocalNav";
import Trending from "./Trending";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="row"></div>
      <BrowserRouter>
        <Search />
        <LocalNav />
        {""}
        <Switch>
          <Route
            exact
            path={["/", "/dashboard/trending"]}
            component={Trending}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
