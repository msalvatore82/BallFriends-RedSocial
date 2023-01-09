import { EditOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deletePost,
  disLike,
  getAllPosts,
  getPostById,
  like,
} from "../../features/post/postsSlice";
import EditPost from "../EditPost/EditPost";
import avatar from "../../Asset/avatar-default.png";
import postImg from "../../Asset/post1.jpeg";
import "./PostDetails.scss";
import CreateComment from "./CreateComment/CreateComment";
import { deleteComment, getAllComment, likeComment,  } from "../../features/comment/commentSlice";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const {likesC, comment } = useSelector((state) => state.comments)
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();



  const showModal = (_id) => {
    setIsModalVisible(true);
  };
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

  useEffect(() => {
    dispatch(getPostById(_id));
    dispatch(getAllComment());
  }, []);

  useEffect(() => {
    getAllComment();
  }, [likesC]);

  return (
    <div className="container-postdetail">
      <div>
        <div key={post?._id} className="container-post-detail">
          <div className="container-head-post-detail ">
            <img
              className="avatar-user-modal-detail"
              src={avatar}
              alt=""
              srcset=""
            />
            <div> {post?.userId.name}</div>
          </div>

          <div className="date-post">
            {getDateDetail(post?.createdAt)}
            {post?.createdAt !== post?.updatedAt ? " (Editado)" : null}
          </div>

          <div className="container-post-detail">
            <p className="container-post-detail-text">{post?.post}</p>
            <div className="container-post-img-detail">
              <img src={postImg} alt="" width="100%" />
            </div>
            <div></div>
            <Button
              className="btn-edit-post"
              style={{
                border: "none",
                background: "none",
              }}
              icon={
                <EditOutlined
                  title="Editar publicación"
                  onClick={() => showModal(post?._id)}
                  style={{
                    color: "gray",
                    fontSize: "15px",
                  }}
                />
              }
            />
          </div>
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
                    }}
                  />
                }
                {post?.likes?.length} Like
              </p>
            </div>
            <div className="comment-length-detail">
              <button
                className="comment-length-detail"
                onClick={() => setVisible(post?._id)}
              >
                {post?.comment.length} comentarios{" "}
              </button>
            </div>
          </div>
          <div className="container-like-comment-delete-detail">
            <div className="container-like-detail">
              <Button
                onClick={() => dispatch(like(post?._id))}
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
                onClick={() => dispatch(disLike(post?._id))}
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
            <div className="container-comment-detail">
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
            <div className="container-delete-detail">
              <Button
                style={{
                  border: "none",
                  marginLeft: 15,
                  background: "none",
                }}
                icon={
                  <MdDeleteForever
                    onClick={() => {
                      dispatch(deletePost(post?._id));
                      navigate("/");
                    }}
                    style={{
                      color: "gray",
                      fontSize: "25px",
                    }}
                  />
                }
              />
            </div>
          </div>
          <div className="constainer-comment-detail">
            <div>
              {visible ? <CreateComment /> : null}
              {post?.comment.map((item) => {
                return visible ? (
                  <div className="constainer-comment-one-detail">
                    <p className="comment-detail">{item?.comment}</p>
                    <div className="container-like-one-detail">
                      <div className="like-coment">
                      <Badge size="small" style={{margin: 5,
                    background: "#4630ac"}} count={item?.likesC.length}
                      >
                      <Button
                        onClick={() => {dispatch(likeComment(item?._id)); navigate(`/post/${post._id}`)}}
                        style={{
                          border: "none",
                          marginLeft: 5,
                          background: "none",
                        }}
                        icon={
                          <AiOutlineLike
                            style={{
                              color: "gray",
                              fontSize: "25px",
                              border: "none",
                              background: "none",

                            }}
                          />
                        }
                      />

    
    </Badge>
                        </div>
                      <div className="delete-coment">
                      <Button
                        style={{
                          border: "none",
                          marginLeft: 5,
                          background: "none",
                        }}
                        icon={
                          <MdDeleteForever
                            onClick={() => { dispatch(deleteComment(item?._id)) ; navigate(`/post/${post._id}`)}}
                             
      
                            style={{
                              color: "gray",
                              fontSize: "25px",
                            }}
                          />
                        }
                      />
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
        <div>
          <EditPost visible={isModalVisible} setVisible={setIsModalVisible} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
