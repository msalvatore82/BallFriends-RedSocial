import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Button, Modal, Form, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import "./Register.scss";

const Register = ({ visible, setVisible }) => {
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
      genero: " ",
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
    setVisible(false);
    clearState();
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="register">
      <>
        <Modal
          open={visible}
          onCancel={handleCancel}
          footer={[
            <div>
              <button className="btns" type="primary" onClick={onSubmit}>
                Crear Usuario
              </button>
            </div>,
          ]}
        >
          <div className="head-register">
            <h2>Registro BallFriends</h2>
            <h5>Es rapido y facil</h5>
          </div>
          <>
            <Form>
              <div className="name-surname">
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
              <div className="email">
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
                    placeholder="Correo electronico"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </Form.Item>
              </div>
              <div className="password">
                <Form.Item>
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
              </div>

              <div className="genre">
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
              <div className="polity">
                <div>
                  <p>
                    Es posible que usuarios de nuestro servicio hayan subido tu
                    informaci??n de contacto a Facebook. M??s informaci??n.
                  </p>
                </div>
                <div>
                  <p>
                    Al hacer clic en Registrarte, aceptas nuestras Condiciones.
                    Obt??n m??s informaci??n sobre c??mo recogemos, usamos y
                    compartimos tu informaci??n en la Pol??tica de privacidad, as??
                    como el uso que hacemos de las cookies y tecnolog??as
                    similares en nuestra Pol??tica de cookies. Es posible que te
                    enviemos notificaciones por SMS, que podr??s desactivar
                    cuando quieras.
                  </p>
                </div>
              </div>
            </Form>
          </>
        </Modal>
      </>
    </div>
  );
};

export default Register;
