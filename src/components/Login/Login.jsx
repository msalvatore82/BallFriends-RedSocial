import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import "./Login.scss"

const Login = () => {
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

const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    console.log("formData", formData);
  };

  return (
    <div className="container-form">
      <div>

      </div>
      <h2>BallFriends</h2>
      <h5>BallFriends te ayuda a comunicarte y compartir con los deportistas de todo el mundo.</h5>
      <div className="container-form-login">

    <form onSubmit={onSubmit}>
      <div >

      <input type="email" name="email" value={email} onChange={onChange} />
      </div>
      <div>

      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      </div>
      <button type="submit">Login</button>
      <p>¿Has olvidado tu contraseña?</p>
      <hr/>
      <button type="submit">  Crear nueva cuenta</button>
    </form>
      </div>
    </div>
  );
};

export default Login;
