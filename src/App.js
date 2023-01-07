import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import User from "./components/Users/Users";
import PostUser from "./components/Users/User/Nav/Postuser/PostUser";
import InfoUser from "./components/Users/User/Nav/infoUser/InfoUser";
import FriendUser from "./components/Users/User/Nav/FriendsUser/FriendUser";
import PostDetail from "./components/PostDetails/PostDetail";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Followers from "./components/Users/User/Nav/FriendsUser/Followers/Followers";
import Follower from "./components/Users/User/Nav/FriendsUser/Followers/Follower/Follower";

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
          <Route path="/Post/:_id" element={<PostDetail />} />
          <Route path="/PostUser" element={<PostUser />} />
          <Route path="/InfoUser" element={<InfoUser />} />
          <Route path="/FriendUser" element={<FriendUser />} />
          <Route path="/Followers" element={<Followers />} />
          <Route path="/getUserById/:_id" element={<Follower />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
