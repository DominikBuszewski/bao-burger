import React from "react";
import "./App.scss";
import HomePage from "./page/homepage/homepage.component";
import Header from "./components/header/header.component";
import MenuPage from "./page/Menu/menu.component";
import AboutPage from "./page/about/about.component";
import ContactPage from "./page/contact/contact.component";
import { Route, Switch } from "react-router-dom";
import CartPage from "./page/cart/cart.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
