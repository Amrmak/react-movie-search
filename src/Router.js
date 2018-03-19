import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"

import Landing from "./Components/Landing"
import Results from "./Components/Results"
import MovieDetails from "./Components/MovieDetails"

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/results/:query" exact component={Results} />
          <Route path="/movie/:id" exact component={MovieDetails} />
        </Switch>
      </HashRouter>
    )
  }
}
