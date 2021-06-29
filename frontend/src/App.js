import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home";
import SignUp from "./components/auth/signUp/SignUp";
import Login from "./components/auth/login";
import Category from "./components/category/index";
import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import Busnisses from "./components/busnisses/index";
import AddBusiness from "./components/add_business";
import { useDispatch } from "react-redux";
import { setToken } from "./reducers/login";
import jwt from "jsonwebtoken";
import "bootstrap/dist/css/bootstrap.min.css";
import Search_results from "./components/search_results/index"

require("dotenv").config();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenPayload = jwt.decode(token);
      dispatch(setToken(token,tokenPayload.user_id));
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/category/:type" component={Category} />
      <Route exact path="/business/:id" component={Busnisses} />
      <Route exact path="/profile/addBusiness" component={AddBusiness} />
      <Route exact path="/search/:search" component={Search_results} />
    </div>
  );
};

export default App;
