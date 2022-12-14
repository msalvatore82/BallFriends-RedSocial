import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Button, Modal, Form,Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    genero: "",
  });

  const { name, email, password, genero } = formData;

  const clearState = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      genero: " "
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
    dispatch(register(formData));
    setIsModalOpen(false);
    clearState()
    console.log("formData", formData);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary">login</Button>
      <Button type="primary" onClick={showModal}>
        register
      </Button>
      <>
        <Modal open={isModalOpen} onOk={onSubmit} onCancel={handleCancel}  key="back">
          <div>
            <h2>Registrarte</h2>
            <h5>Es rapido y facil</h5>
          </div>
          <>
            <Form>
              <div></div>
              <div>
                <Form.Item>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Nombre y Apellido"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item>
                  <Form.Item
                   placeholder="E-mail"
                   
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                     
                    />
                    <Input.Password
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                </Form.Item>
              </div>

              <div>
                <p>
                  Genero <QuestionCircleFilled />
                </p>
                <Form.Item>
                  <Input
                    type="text"
                    name="genero"
                    value={genero}
                    onChange={onChange}
                    placeholder="genero"
                    
                  />
                </Form.Item>

               
              </div>
              <div>
                <p>
                  Es posible que usuarios de nuestro servicio hayan subido tu
                  información de contacto a Facebook. Más información.
                </p>
              </div>
              <div>
                <p>
                  Al hacer clic en Registrarte, aceptas nuestras Condiciones.
                  Obtén más información sobre cómo recogemos, usamos y
                  compartimos tu información en la Política de privacidad, así
                  como el uso que hacemos de las cookies y tecnologías similares
                  en nuestra Política de cookies. Es posible que te enviemos
                  notificaciones por SMS, que podrás desactivar cuando quieras.
                </p>
              </div>
            </Form>
          </>
          
        </Modal>
      </>
    </div>
  );
};

export default Register;

