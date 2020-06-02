import React from "react";
import { createBrowserHistory } from "history";
import "../styles.css";
import "nes.css/css/nes.min.css";
import { Router, Route, Switch } from "react-router-dom";

import Controls from "./Controls";
import Footer from "./Footer";
import HomePage from "./HomePage";
import MakerID from "./MakerID";

const defaultHistory = createBrowserHistory();

export default function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/controls/" component={Controls} />
          <Route exact path="/maker-id/" component={MakerID} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
