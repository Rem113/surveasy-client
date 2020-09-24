import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./style.scss"

import Home from "./pages/Home"
import Navbar from "./components/Navbar"

import routes from "./config/routes"

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path={routes.HOME} component={Home} exact />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("root"))
