import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import User from "./components/Users/Users";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
