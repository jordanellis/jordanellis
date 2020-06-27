import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "nes.css/css/nes.min.css";

import BuiltWith from "./BuiltWith";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import MakerID from "./MakerID";
import Battle from "./battle/Battle";
import Resume from "./resume/Resume";
import Skills from "./Skills";
import "../styles.css";

const defaultHistory = createBrowserHistory({ basename: process.env.PUBLIC_URL });

export default function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Header/>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/built-with/" component={BuiltWith} />
          <Route exact path="/maker-id/" component={MakerID} />
          <Route exact path="/battle/" component={Battle} />
          <Route exact path="/resume/" component={Resume} />
          <Route exact path="/skills/" component={Skills} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
