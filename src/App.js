import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PageTitle from "./components/Inicio/PageTitle";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Users/User.jsx/User";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        {user ? <PageTitle /> : <Header />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
