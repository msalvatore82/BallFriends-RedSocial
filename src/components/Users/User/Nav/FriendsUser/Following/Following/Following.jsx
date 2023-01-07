import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import avatar from "../../../../../../../Asset/avatar-default.png";

import { getUserById } from "../../../../../../../features/users/usersSlice";

const Following = () => {
  const { _id } = useParams();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(_id));
    console.log(user);
  }, []);

  return (
    <div>
      <div>
        <p>{user.user.name}</p>
        <img src={avatar} alt="" sizes="" srcset="" />
        <p>cantidad de post: {user.user.postIds.length}</p>
        <p>cantidad de Seguidores: {user.user.followers.length}</p>
        <p>cantidad de Seguidos: {user.user.seguidos.length}</p>
        <p>
          cantidad de Likes: {user.user.likes.length + user.user.likesC.length}
          {user.user.likes.length + user.user.likesC.length === 1
            ? " like"
            : " likes"}
        </p>
      </div>
    </div>
  );
};

export default Following;
