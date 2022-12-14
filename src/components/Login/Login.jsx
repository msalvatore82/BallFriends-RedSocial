import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import "./Login.scss";
import { Button, Form, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../Asset/logoconletras.png"
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router";

const Login = () => {
useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const clearState = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    clearState()
  };

  return (
    <div className="container-form">
      <div></div>
      <img src={logo} alt="logo" className="logo"/>
      <h5>
        BallFriends te ayuda a comunicarte y compartir con los deportistas de
        todo el mundo.
      </h5>
      <div className="container-form-login">
        <form onSubmit={onSubmit}>
          <div>
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
              className=" input-mail"
                type="email"
                name="email"
                value={email}
                placeholder="Correo electronico"
                onChange={onChange}
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <Input.Password className="input-password"
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
          <button className="button-login">
            Iniciar sesion
          </button>
          <p className="password-missed">¿Has olvidado tu contraseña?</p>
          <hr className="line-login"/>
          <button  onClick={() => {
                  <Link to="/register" />;
                }}  className="button-create-acount" >  
            Crear nueva cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



