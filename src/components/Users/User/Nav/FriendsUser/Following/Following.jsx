import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { getUserById } from "../../../../../../features/users/usersSlice";
import "./Following.scss";

const Following = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="container-friends">
      <p> {user?.user.seguidos.length} Following </p>
      {user?.user.seguidos.map((userFollowing) => (
        <div className="container-card-following">
          <p className="name-following"
            // onClick={() => {
            //   dispatch(getUserById(userFollowing));
            // }}
          > 
            {userFollowing?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Following;
