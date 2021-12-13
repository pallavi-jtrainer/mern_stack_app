import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Profile from "./components/profile";
import UserDash from "./components/userDash";
import AdminDash from "./components/adminDash";

import Pubsub from './common/PubSub'; 
import AuthVerify from "./common/AuthVerify";

const App = () => {
  
  const [showAdminDash, setShowAdminDash] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  
  useEffect(() => {
    const user = AuthService.CurrentUser();
    
    if (user) {
      setCurrentUser(user);
      setShowAdminDash(user.roles.includes("ROLE_ADMIN"));
    }
    
    // Pubsub.on("logout", () => {
    //   logOut();
    // })
    // 
    // return () => {
    //   Pubsub.remove("logout");
    //}
  }, []);
  
  
  const logOut = () => {
    AuthService.Logout();
    setShowAdminDash(false);
    setCurrentUser(undefined);
  };
  
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Authorization Demo
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showAdminDash && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Dashboard
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/logout"} className="nav-link" onClick={logOut}>
                  LogOut
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
            <Routes>
              <Route exact path={["/", "/home"]} element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route path="/user" element={<UserDash/>} />
              <Route path="/admin" element={<AdminDash/>} />
            </Routes>
        </div>
        <AuthVerify logOut={logOut}/>
      </div>
    </Router>
      
  );
};

export default App;