import { AiOutlineDislike, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Post.scss";
import {
  deletePost,
  disLike,
  getAllPosts,
  like,
} from "../../../features/post/postsSlice";
import CreateComment from "../../CreateComment/CreateComment";
import { MdDeleteForever } from "react-icons/md";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const isAlreadyLiked = posts.like?.includes(user?.user._id);
  return (
    <div>
      {posts.map((element) => (
        <div key={element._id} className="container-post">
          <div className="container-head-post">
            {/* <img src="" title="imagen de usuario" /> */}
            <p>{element.userId}</p>
          </div>
          <div className="container-post">
            <p>{element.post}</p>
          </div>
          <div className="container-counter">
            <div>
              <p className="like-length">
                {
                  <AiTwotoneLike
                    style={{
                      color: "Blue",
                      fontSize: "25px",
                      border: "none",
                    }}
                  />
                }
                {element.likes.length} Like
              </p>
            </div>
            <div className="comment-length">{element.comment.length}</div>
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
                    onClick={() => setVisible(true)}
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
                  <Card>
                    <p>{item.comment}</p>
                    <div className="container-like">
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
                              fontSize: "25px",
                              border: "none",
                            }}
                          />
                        }
                      />
                    </div>
                  </Card>
                ) : null;
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
