import React from "react";
import Header from "../Header/Header";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Categories from "../Pages/Categories/Categories";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Router>
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
