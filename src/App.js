import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/about" component={About} />

                <Route path={["/"]} component={Dashboard} />
              </Switch>
            </div>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
