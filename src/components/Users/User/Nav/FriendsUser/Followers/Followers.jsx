import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getFID } from "web-vitals";
import { getInfo } from "../../../../../../features/post/postsSlice";
import { getUserById } from "../../../../../../features/users/usersSlice";
import "./Followers.scss";

const Followers = () => {
  const { user } = useSelector((state) => state.users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const showModal = (_id) => {
    dispatch(getUserById(_id));
    setIsModalVisible(true);
  };

  // console.log(users);

  return (
    <div className="container-friends">
      <p> {user?.user.followers.length} Followers </p>
      {user?.user.followers.map((userFollowers) => (
        <div className="container-card-follower">
          <p
            // onClick={() => {
            //   dispatch(getInfo(userFollowers));
            // }}
          >
            <p className="name-follower" >{userFollowers?.name}</p>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Followers;
