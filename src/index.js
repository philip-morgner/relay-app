import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.css";

import App from "./App";
import Login from "./Login";

const routing = (
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={App} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
