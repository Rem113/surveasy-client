import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./style.scss"

import Home from "./pages/Home"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

import routes from "./config/routes"

const App = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Switch>
      <Route path={routes.HOME} component={Home} exact />
      <Route path={routes.ABOUT} component={Home} exact />
      <Route path={routes.CONTACT} component={Home} exact />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("root"))
