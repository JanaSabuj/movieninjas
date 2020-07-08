import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

const App = () => {
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=d7db91d5";
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
