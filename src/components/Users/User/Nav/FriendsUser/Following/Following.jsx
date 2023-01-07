import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { getUserById } from "../../../../../../features/users/usersSlice";
import "./Following.scss";

const Following = () => {
  const { user, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <p> {user.user.seguidos.length} Following </p>
      {user.user.seguidos.map((userFollowing) => (
        <div className="container-card-following">
          <p
            onClick={() => {
              dispatch(getUserById(userFollowing));
              navigate(`/getUserById/${userFollowing}`);
            }}
          >
            {userFollowing}
            {console.log(userFollowing)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Following;
