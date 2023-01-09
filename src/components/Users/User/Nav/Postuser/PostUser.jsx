import React, { useEffect } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import post from "../../../../../Asset/post1.jpeg"
import { getAllPosts } from "../../../../../features/post/postsSlice";

import User from "../../User";
import "./PostUser.scss";

const PostUser = () => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getAllPosts());
   }, [])


  const getDateDetail = (date) => {
    const dateDetail = new Date(date);
    const hours =
      dateDetail.getHours() > 10
        ? `${dateDetail.getHours()}`
        : `0${dateDetail.getHours()}`;
    const minutes =
      dateDetail.getMinutes() > 10
        ? `${dateDetail.getMinutes()}`
        : `0${dateDetail.getMinutes()}`;
    return `${dateDetail.getDate()} ${dateDetail
      .toLocaleString("en-US", { month: "short" })
      .toLowerCase()}. ${dateDetail.getFullYear()} - ${hours}:${minutes}`;
  };

  return (
    <div>
      <User />
      <div className="constainer-postUser">
        {user.user.postIds.map((item) => {
          return (
            <div className="constainer-postUser-one" onClick={(e) => {navigate(`/post/${item._id}`);  e.stopPropagation()}} >
              <p className="postUser">{item.post} </p>
              <div className="container-post-img">
                <img src={post} alt=""  className="container-post-img"/>
              </div>
              <p className="date-post">
                publicacion realizada el: {getDateDetail(item.createdAt)}
                {item.createdAt !== item.updatedAt ? " (Editado)" : null}
              </p>
              <div className="container-counter-detail">
                <div>
                  <p className="like-length-detail">
                    {
                      <AiTwotoneLike
                        className="ico-lke-detail"
                        style={{
                          fontSize: "25px",
                          border: "none",
                          marginBottom: -5,
                          marginRight: 5
                        }}
                      />
                    }
                    {item.likes.length} Like
                  </p>
                </div>
                <div className="comment-length-detail">
                  <p className="comment-length-detail">
                    <BiCommentDots
                      style={{
                        color: "gray",
                        fontSize: "25px",
                        marginBottom: -8,
                        marginRight: 5
                      }}
                    />
                    {item.comment.length} comentarios{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostUser;
