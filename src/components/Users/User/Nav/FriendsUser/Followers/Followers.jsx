import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUserById } from "../../../../../../features/users/usersSlice";
import User from "../../../User";
import "./Followers.scss";

const Followers = () => {
  const { user } = useSelector((state) => state.users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showModal = (_id) => {
    dispatch(getUserById(_id));
    setIsModalVisible(true);
  };

  // console.log(users);

  return (
    <div>
      <p> {user.user.followers.length} Followers </p>
      {user.user.followers.map((userFollowers) => (
        <div className="container-card-follower">
          <p
            onClick={() => {
              dispatch(getUserById(userFollowers));
              navigate(`/getUserById/${userFollowers}`);
            }}
          >
            {userFollowers}
            {console.log(userFollowers)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Followers;
