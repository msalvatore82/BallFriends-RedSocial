import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { Button, Card, Pagination } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Post.scss";
import { like } from "../../../features/post/postsSlice";
import CreateComment from "../../CreateComment/CreateComment";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
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
              <p>
                icon=
                {
                  <AiTwotoneLike
                    style={{
                      color: "Blue",
                      fontSize: "25px",
                      border: "none",
                    }}
                  />
                }
                Like {element.likes} cantidad delikes
              </p>
            </div>
            <div>cantidad de comentarios</div>
          </div>
          <div className="container-like-comment">
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
            <div>
              <Button
                className="container-comment"
                onClick={() => {
                  //   createfav(product.id);
                }}
                style={{
                  border: "none",
                  marginLeft: 15,
                }}
                icon={
                  <BiCommentDots
                    onClick={() => setVisible(true)}
                    style={{
                      color: "gray",
                      fontSize: "25px",
                      border: "none",
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
