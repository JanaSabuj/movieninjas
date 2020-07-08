import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch></Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
