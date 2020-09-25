import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./style.scss"

import routes from "./config/routes"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path={routes.HOME} component={Home} exact />
      <Route path={routes.SIGNUP} component={SignUp} exact />
      <Route path={routes.LOGIN} component={Login} exact />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("root"))
