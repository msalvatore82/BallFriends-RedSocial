import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  createComment,
  getAllComment,
} from "../../features/comment/commentSlice";
import { getAllPosts } from "../../features/post/postsSlice";
import "./CreateComment.scss";

const CreateComment = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [commentData, setCommentData] = useState({
    comment: "",
  });

  const { comment } = commentData;

  const clearState = () => {
    setCommentData({
      comment: "",
    });
  };
  const dispatch = useDispatch();

  const onChange = (e) => {
    setCommentData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(commentData));
    setOpen(false);
    clearState();
  };

  useEffect(() => {
    getAllPosts();
    getAllComment();
  }, []);

  return (
    <div className="form-create-comment">
      <>
        <Form onClick={onSubmit}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "por Favor comparta algo",
              },
            ]}
          >
            <div className="input-form">
              <Input
                className="input"
                name="comment"
                value={comment}
                onChange={onChange}
                placeholder="Envia tu comentario..."
              />
              <AiOutlineSend
                className="button-publish"
                key="submit"
                type="primary"
                loading={loading}
              />
            </div>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};

export default CreateComment;
