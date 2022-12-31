import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, getAllPosts } from "../../features/post/postsSlice";
import avatar from "../../Asset/avatar-default.png"

import "./CreatePost.scss";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
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
    setOpen(false);
    clearState();
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };
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
          footer={[
            
          ]}
        >
          <Form >
            <img src="" alt="" /> foto de usuaur
            <p>nombre de usuario</p>
            <Form.Item 
            rules={[
                 {
                  required: true,
                  message: "por Favor comparta algo",
                },
              ]}
            >
              <Input 
              name="post"
              value={post}
              onChange={onChange}
              placeholder="Que estas pensando" />
            </Form.Item>
       
            <Button
            className="button-publish"
              key="submit"
              type="primary"
              loading={loading}
              onClick={onSubmit}
            >
              Publicar
            </Button>,
          </Form>
        </Modal>
      </>
    </div>
  );
};

export default CreatePost;
