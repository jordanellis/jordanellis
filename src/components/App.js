import React from "react";
import { createBrowserHistory } from "history";
import "../styles.css";
import "nes.css/css/nes.min.css";
import { Router, Route, Switch } from "react-router-dom";

import BuiltWith from "./BuiltWith";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import MakerID from "./MakerID";
import Resume from "./Resume";

const defaultHistory = createBrowserHistory();

export default function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/built-with/" component={BuiltWith} />
          <Route exact path="/maker-id/" component={MakerID} />
          <Route exact path="/resume/" component={Resume} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
