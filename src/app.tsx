import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./style.scss"

import routes from "./config/routes"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import CreateSurvey from "./pages/CreateSurvey"

const App = () => (
  <BrowserRouter>
    <Route
      path={[routes.HOME, routes.LOGIN, routes.SIGNUP]}
      component={Navbar}
      exact
    />
    <Switch>
      <Route path={routes.HOME} component={Home} exact />
      <Route path={routes.SIGNUP} component={SignUp} exact />
      <Route path={routes.LOGIN} component={Login} exact />
      <Route path={routes.CREATE_SURVEY} component={CreateSurvey} exact />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("root"))
