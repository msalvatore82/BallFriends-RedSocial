/* eslint-disable no-restricted-globals */
import { AiOutlineDislike, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./Post.scss";
import avatar from "../../../Asset/avatar-default.png";
import post from "../../../Asset/post1.jpeg"
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  // const { user} = useSelector((state) => state.users);
  // console.log(user);
  // console.log(posts)



  return (
    <div>
      {posts.map((element, idx) =>  (
        <div key={idx} className="container-post" onClick={() => navigate(`/post/${element._id}`)}>
          <div className="container-head-post ">
            <img className="avatar-user-modal" src={avatar} alt="" srcset="" />
            {/* {console.log(element)} */}
            <div > {element.userId.name}</div>
            <p></p>
          </div>
          <div className="container-post-post">
            <p style={{
                  marginLeft: "0.2rem",
                }}>{element.post}</p>
          <div className="container-post-img" >
            <img src={post} alt="" width="100%"/>
          </div>
          </div>
          <div className="container-counter">
            <div>
              <p className="like-length">
                {
                  <AiTwotoneLike
                    className="ico-lke"
                    style={{
                      fontSize: "25px",
                      border: "none",
                      marginBottom: -5,
                    }}
                  />
                }
                {element.likes.length}
                {element.likes.length === 1 ? " like" : " likes"}
              </p>
            </div>
            <div className="comment-length" >
              <p className="comment-length" >{element.comment.length } {element.comment.length === 1 ? " Comentario" : " Comentarios"} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
