import React from "react";
import { Switch, Route } from "react-router-dom";

//import Home from "./home";
import Preorders from "./preorder";
import Services from "./services";
import Contact from "./contact";
import How from "./howitworks";
import Terms from "./terms";
import Privacy from "./privacy";
import Search from "./search";
import Pricing from "./pricing";
import Dashboard from "../App/index";
import Order from "../App/index";
import Preorder from "../App/index";
import Product from "../App/index";
import Category from "../App/index";
import Customer from "../App/index";
import Marketing from "../App/index";
import Discounts from "../App/index";
import Wallet from "../App/index";
import Bank from "../App/index";
import Payhistory from "../App/index";
import Domain from "../App/index";
import Storeprofile from "../App/index";
import Users from "../App/index";
import Storetemplate from "../App/index";
import Logins from "../App/index";
import AddProduct from "../App/index";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/preorder/:id" component={Preorders} />
    <Route exact path="/preorder/:id/:suc" component={Preorders} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/howitworks" component={How} />
    <Route exact path="/contact" component={Contact} />

    <Route exact path="/terms" component={Terms} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/pricing" component={Pricing} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/order" component={Order} />
    <Route exact path="/preorder" component={Preorder} />
    <Route exact path="/product" component={Product} />
    <Route exact path="/category" component={Category} />
    <Route exact path="/customer" component={Customer} />
    <Route exact path="/marketing" component={Marketing} />
    <Route exact path="/discounts" component={Discounts} />
    <Route exact path="/wallet" component={Wallet} />
    <Route exact path="/bank" component={Bank} />
    <Route exact path="/payhistory" component={Payhistory} />
    <Route exact path="/domain" component={Domain} />
    <Route exact path="/storeprofile" component={Storeprofile} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/storetemplate" component={Storetemplate} />
    <Route exact path="/auth/signup" component={Logins} />
    <Route exact path="/auth/signin" component={Logins} />
    <Route exact path="/auth/reset-password" component={Logins} />
    <Route exact path="/auth/change-password/:id" component={Logins} />
    <Route exact path="/auth/verify/:id" component={Logins} />
    <Route exact path="/addproduct" component={AddProduct} />
  </Switch>
);

export default Main;
