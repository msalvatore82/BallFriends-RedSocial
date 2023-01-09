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
import SearchPost from "./components/SearchUser/SearchPost";
import PrivateZone from "./guards/PrivateZone";
import { useSelector } from "react-redux";
import MoreAthletes from "./components/Users/User/Nav/MoreAthletes/MoreAthletes";


function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
      {user ? <Header /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={ <PrivateZone> <User /> </PrivateZone>} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/Post/:_id" element={<PrivateZone> <PostDetail /> </PrivateZone>} />
          <Route path="/PostUser" element={<PrivateZone><PostUser /></PrivateZone>} />
          <Route path="/InfoUser" element={<PrivateZone><InfoUser /></PrivateZone>} />
          <Route path="/FriendUser" element={<PrivateZone><FriendUser /></PrivateZone>} />
          <Route path="/MoreAthletes" element={<PrivateZone><MoreAthletes /></PrivateZone>} />
          <Route path="/search/:postName" element={<SearchPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {user ?  <Footer /> : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
