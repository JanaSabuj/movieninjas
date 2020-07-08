import React from "react";
import Search from "./Search";
import LocalNav from "./LocalNav";
import Trending from "./Trending";
import Favorites from "./Favorites";
import Detail from "./Detail";

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
          <Route exact path="/dashboard/favorites" component={Favorites} />
          <Route path={["/details/:movieId", "/detailss"]} component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
