import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import CurrentList from "../Page/Current/CurrentList";
import PastList from "../Page/Past/PastList";
import SearchList from "../Page/Search/SearchList";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={CurrentList} />
      <Route path="/pastlist" exact component={PastList} />
      <Route path="/searchlist" exact component={SearchList} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
