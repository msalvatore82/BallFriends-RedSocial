import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getAllPosts } from "../../features/post/postsSlice";
import avatar from "../../Asset/avatar-default.png";

import "./CreatePost.scss";

const CreatePost = () => {
  const { user } = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const [open, setVisible] = useState(false);
  const [postData, setPostData] = useState({
    post: "",
  });

  const { post } = postData;

  const clearState = () => {
    setPostData({
      post: "",
    });
  };
  const dispatch = useDispatch();

  const onChange = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    setVisible(false);
    clearState();
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className="form-create-post">
      <div className="avatar-user">
        <img className="avatar-user" src={avatar} alt="" srcset="" />
      </div>
      <button className="input" onClick={showModal}>
        ¿Tienes algo para contarnos?{" "}
      </button>
      <>
        <Modal
          open={open}
          title="Crear publicación"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <fom>
            <div className="head-create-post">
              <img
                className="avatar-user-modal"
                src={avatar}
                alt=""
                srcset=""
              />
              {/* <p>{user.user.name}</p> */}
              <p>usuario</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "por Favor comparta algo",
                },
              ]}
            >
              <Input
                className="input-create-post"
                name="post"
                value={post}
                onChange={onChange}
                placeholder="Que estas pensando"
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="file"
                className="input-img-post"
                // name="img"
                // value={img}
                onChange={onChange}
              />
            </Form.Item>
            <button
              className="button-publish"
              key="submit"
              type="primary"
              loading={loading}
              onClick={onSubmit}
            >
              Publicar
            </button>
            ,
          </fom>
        </Modal>
      </>
    </div>
  );
};

export default CreatePost;
