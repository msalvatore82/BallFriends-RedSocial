import {  Modal, Form, Input } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  useParams } from "react-router";
import { updatePost } from "../../features/post/postsSlice";
import "./EditPost.scss";

const EditPost = ({ visible, setVisible }) => {
  const { _id } = useParams();
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    const postEdit = {
      ...post,
    };
    form.setFieldsValue(postEdit);
  }, [post]);

  const onFinish = (values) => {
    if (values != null) {
      const postWithId = { ...values, _id: post._id };
      setVisible(false);
      dispatch(updatePost(postWithId));
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };



  return (
    <Modal
      title="Quieres editar tu publicacion?"
      open={visible}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="post">
          <Input placeholder="Editar tu prublicacion" />
        </Form.Item>
        <Form.Item>
          <button className="btn-post-edit" type="primary" htmlType="submit">
            Actualizar Publicacion
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditPost;
