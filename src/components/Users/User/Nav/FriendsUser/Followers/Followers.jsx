import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUserById } from "../../../../../../features/users/usersSlice";
import "./Followers.scss";

const Followers = () => {
  const { user } = useSelector((state) => state.users);
  const [ setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const showModal = (_id) => {
    dispatch(getUserById(_id));
    setIsModalVisible(true);
  };

  return (
    <div className="container-friends">
      <p> {user?.user.followers.length} Followers </p>
      {user?.user.followers.map((userFollowers) => (
        <div className="container-card-follower">
          <p>
            <p className="name-follower" >{userFollowers?.name}</p>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Followers;
