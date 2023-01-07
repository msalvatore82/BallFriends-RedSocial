import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
} from "../../../../../features/users/usersSlice";

import User from "../../User";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";

const FriendUser = () => {
  const { user, users } = useSelector((state) => state.users);
  console.log(user)


  return (
    <div>
      <User />
      <div>
       
        
      </div>
      <div>
        
       <Followers></Followers>
      </div>
      <div>
        <Following/>
      </div>
    </div>
  );
};

export default FriendUser;
