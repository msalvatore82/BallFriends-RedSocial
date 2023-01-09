import React from "react";
import User from "../../User";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";

const FriendUser = () => {
  
  return (
    <div>
      <User />
      <div className="container-frienduser">
      <div className="container-card-follower">
        <Followers />
      </div>
      <div className="container-card-following">
        <Following />
      </div>

      </div>
    </div>
  );
};

export default FriendUser;