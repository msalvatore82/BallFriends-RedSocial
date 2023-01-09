import { AiOutlineDislike, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Post.scss";
import { deletePost, disLike, getAllPosts, getPostById, like } from "../../../features/post/postsSlice";
import CreateComment from "../../PostDetails/CreateComment/CreateComment";
import { MdDeleteForever } from "react-icons/md";
import avatar from "../../../Asset/avatar-default.png";
import post from "../../../Asset/post1.jpeg"
import EditPost from "../../EditPost/EditPost";
import { useNavigate } from "react-router";
import { getUsers, reset } from "../../../features/users/usersSlice";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = (_id) => {
    dispatch(getPostById(_id));
    setIsModalVisible(true);
  };

  useEffect(() => {
    dispatch(getAllPosts());
    getUsers()
    dispatch(reset())
  }, []);
  

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
      .toLocaleString("es-ES", { month: "short" })
      .toLowerCase()}. ${dateDetail.getFullYear()} - ${hours}:${minutes}`;
  };



  return (
    <div>
      {posts.map((element, idx) =>  (
        <div key={idx} className="container-post" >
        <div className="container-head-post ">
          <img className="avatar-user-modal" src={avatar} alt="" srcset="" />
          <div > {element.userId.name}</div>
          <p className="date-post">
                {getDateDetail(element.createdAt)}
                {element.createdAt !== element.updatedAt ? " (Editado)" : null}
              </p>
        </div>
        <div className="container-post-post">
          <p style={{
                marginLeft: "0.2rem",
              }}>{element.post}</p>
        <div className="container-post-img" >
          <img src={post} alt="" width="100%" onClick={() => navigate(`/post/${element._id}`)}/>
        </div>
        </div>
        <div className="container-counter">
          <div>
            <p className="like-length">
              {
                <AiTwotoneLike
                onClick={() => navigate(`/post/${element._id}`)}
                  className="ico-lke"
                  style={{
                    fontSize: "25px",
                    border: "none",
                    marginBottom: -5,
                  }}
                />
              }
              {element?.likes.length}
              {element?.likes.length === 1 ? " like" : " likes"}
              
            </p>
          </div>
          <div className="comment-length" >
            <p onClick={() => navigate(`/post/${element._id}`)} className="comment-length" >{element.comment.length } {element.comment.length === 1 ? " Comentario" : " Comentarios"} </p>
          </div>
          </div>
          <div className="container-like-comment-delete">
            <div className="container-like">
              <Button
                onClick={() => {if (user) dispatch(like(element?._id)); else navigate("/login");}}
                style={{
                  border: "none",
                  background: "none",
                  marginLeft: 15,
                }}
                icon={
                  <AiOutlineLike
                    style={{
                      color: "gray",
                      fontSize: "25px",
                    }}
                  />
                }
              />
              <Button
                onClick={() => {if (user) dispatch(disLike(element?._id)); else navigate("/login");}}
                style={{
                  border: "none",
                  background: "none",
                  marginLeft: -4,
                }}
                icon={
                  <AiOutlineDislike
                    style={{
                      color: "gray",
                      fontSize: "25px",
                    }}
                  />
                }
              />
            </div>
            <div className="container-comment">
              <Button
                style={{
                  border: "none",
                  marginLeft: 15,
                  background: "none",
                }}
                icon={
                  <BiCommentDots
                  onClick={() => navigate(`/post/${element._id}`)}
                    style={{
                      color: "gray",
                      fontSize: "25px",
                    }}
                  />
                }
              />
            </div>
            <div className="container-delete">
              <Button
                style={{
                  border: "none",
                  marginLeft: 15,
                  background: "none",
                }}
                icon={
                  <MdDeleteForever
                    onClick={() => {if (user) dispatch(deletePost(element?._id)); else navigate("/login");}}
                    style={{
                      color: "gray",
                      fontSize: "25px",
                    }}
                  />
                }
              />
              
            </div>
          </div>
          <div className="constainer-comment">
            <div>
              {visible ? <CreateComment /> : null}
              {element.comment.map((item) => {
                return visible ? (
                  <div className="constainer-comment-one" >
                    <p className="comment">{item.comment}</p>
                    <div className="container-like-one">
                      {/* <Button
                        onClick={() => dispatch(like(element?._id))}
                        style={{
                          border: "none",
                          marginLeft: 15,
                        }}
                        icon={
                          <AiOutlineLike
                            style={{
                              color: "gray",
                              fontSize: "15px",
                              border: "none",
                            }}
                          />
                        }
                      /> */}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
          <div>
            {/* {element} */}
            <EditPost visible={isModalVisible} setVisible={setIsModalVisible} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
