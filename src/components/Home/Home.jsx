import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Posts from "../Posts/Posts";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container-home">
      <div className="sidebar-left"> </div>
      <div className="posts">
        <div className="create-post">
          <CreatePost />
        </div>
        <div className="posts">
          <Posts />
        </div>
      </div>
      <div className="sidebar-rigth"></div>
    </div>
  );
};

export default Home;
