import { Button, Modal, Form, Input } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatePost } from "../../features/post/postsSlice";

const EditPost = ({ visible, setVisible }) => {
  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    const postEdit = {
      ...post,
    };

    form.setFieldsValue(postEdit);
  }, [post]);
  

  const onFinish =  (values) => {
    const postWithId = { ...values};
    dispatch(updatePost(postWithId));
    setVisible(false);
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
      <Form onFinish={onFinish}  form={form} >
        <Form.Item name="post">
          <Input placeholder="Editar tu prublicacion" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditPost;
