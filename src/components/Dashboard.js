import React from "react";
import Search from "./Search";
import LocalNav from "./LocalNav";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";

const Dashboard = () => {
  return (
    <div>
      <div className="row"></div>
      <BrowserRouter>
        <Search />
        <LocalNav />
        <Switch>
          <Route exact path={["/", "/dashboard/trending"]} component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
