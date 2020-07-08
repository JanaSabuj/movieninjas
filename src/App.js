import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
