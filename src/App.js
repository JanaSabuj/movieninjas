import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=d7db91d5";
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route path={["/"]} component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
