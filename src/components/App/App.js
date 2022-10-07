import React from "react";
import Header from "../Header/Header";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Categories from "../Pages/Categories/Categories";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="link-div">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link-name")}
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link-name")}
            to="/favorites"
          >
            Favorites
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "link-name")}
            to="/categories"
          >
            Categories
          </NavLink>
        </div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Router>
    </div>
  );
}

export default App;
