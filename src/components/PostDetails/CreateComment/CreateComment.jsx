import { Form, Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  createComment,
  getAllComment,
} from "../../../features/comment/commentSlice";
import { getAllPosts } from "../../../features/post/postsSlice";
import "./CreateComment.scss";

const CreateComment = () => {
  const { _id } = useParams();
  const { post } = useSelector((state) => state.posts);
  const [setOpen] = useState(false);
  const [formData, setFormData] = useState({
    comment: "",
    postId: _id,
  });

  const { comment } = formData;

  const clearState = () => {
    setFormData({
      comment: "",
      postId: "",
    });
  };

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(formData));
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
        <Form>
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
                 onClick={onSubmit}
              />
            </div>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};

export default CreateComment;
