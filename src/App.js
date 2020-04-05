import React from "react";

import "./App.scss";
import HomePage from "./page/homepage/homepage.component";
import Header from "./components/header/header.component";
import MenuPage from "./page/Menu/menu.component";
import AboutPage from "./page/about/about.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/menu" component={MenuPage} />
      </Switch>
    </div>
  );
}

export default App;
