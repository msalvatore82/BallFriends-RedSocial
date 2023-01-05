/* eslint-disable no-restricted-globals */
import { AiOutlineDislike, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Post.scss";
import { deletePost, disLike, getPostById, like } from "../../../features/post/postsSlice";
import CreateComment from "../../CreateComment/CreateComment";
import { MdDeleteForever } from "react-icons/md";
import avatar from "../../../Asset/avatar-default.png";
import { EditOutlined } from "@ant-design/icons";
import EditPost from "../../EditPost/EditPost";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  // const { user} = useSelector((state) => state.users);
  // console.log(user);
  // console.log(posts)
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const showModal = (_id) => {
    dispatch(getPostById(_id));
    setIsModalVisible(true);
  };



  return (
    <div>
      {posts.map((element, idx) =>  (
        <div key={idx} className="container-post">
          <div className="container-head-post ">
            <img className="avatar-user-modal" src={avatar} alt="" srcset="" />
            {/* {console.log(element)} */}
            <div > {element.userId.name}</div>
            <p></p>
          </div>
          <div className="container-post">
            <p>{element.post}</p>
            <Button
                style={{
                  border: "none",
                  background: "none",
                  
                }}
                icon={
                  <EditOutlined
                  title="Editar publicación"
                    onClick={() => showModal(element._id)}
                    style={{
                      color: "gray",
                      fontSize: "15px",
                    }}
                  />
                }
              />
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
                {element.likes.length} Like
              </p>
            </div>
            <div className="comment-length" >
              <button className="comment-length" onClick={() => setVisible(element._id)} >{element.comment.length }  comentarios </button>
              
            </div>
          </div>
          <div className="container-like-comment-delete">
            <div className="container-like">
              <Button
                onClick={() => dispatch(like(element._id))}
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
                onClick={() => dispatch(disLike(element._id))}
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
                    onClick={() => setVisible(element._id)}
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
                    onClick={() => dispatch(deletePost(element._id))}
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
                      <Button
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
                      />
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
