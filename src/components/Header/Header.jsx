import React, { useState } from "react";
import { Input } from "antd";
import {
  AlertOutlined,
  AppstoreOutlined,
  HomeFilled,
  MessageOutlined,
  SkinFilled,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import isolgo from "../../Asset/isologo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout, AiOutlineSearch } from "react-icons/ai";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
  };

  useNavigate();
  const { Search } = Input;

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="header-nav">
      {user ? (
        <>
          <nav className="nav">
            <div className="nav-left">
              <div className="picture">
                <Link to="/home">
                  <img src={isolgo} alt="isologo" className="isologo" />
                </Link>
              </div>
              <div>
                <input
                  className="input-search"
                  onKeyUp={handleChange}
                  placeholder="Buscar publicación"
                  name="text"
                />
              </div>
              <div className="nav-central"></div>
              <div
                style={{
                  margin: 15,
                }}
              >
                <Link to="/home">
                  <HomeFilled
                    title="inicio"
                    className="logo-home"
                    style={{
                      fontSize: 25,
                      marginLeft: 15,
                      background: "none",
                    }}
                  />
                </Link>
                <Link to="/teams">
                  <TeamOutlined
                    title="Equipos"
                    className="logo-team"
                    style={{
                      fontSize: 25,
                      marginLeft: 15,
                      background: "none",
                    }}
                  />
                </Link>
                <Link to="/Myteams">
                  <SkinFilled
                    title="Mis-Equipos"
                    className="logo-myteam"
                    style={{
                      background: "none",
                      fontSize: 25,
                      marginLeft: 15,
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <div>
                <Input
                  placeholder="Buscar Deportistas"
                  //   onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                />
              </div>

              <div>
                <AppstoreOutlined
                  title="Menú"
                  className="logo-menu"
                  style={{
                    fontSize: 25,
                    background: "none",
                  }}
                />
              </div>
              <div>
                <MessageOutlined
                  title="Mensanjes"
                  className="logo-msj"
                  style={{
                    fontSize: 25,
                    background: "none",
                  }}
                />
              </div>
              <div>
                <AlertOutlined
                  title="Notificaciones"
                  className="logo-alert"
                  style={{
                    fontSize: 25,
                    background: "none",
                  }}
                />
              </div>
              <div>
                <Link to="/user">
                  <UserOutlined
                    title="Usuario"
                    className="logo-user"
                    style={{
                      fontSize: 25,
                      background: "none",
                    }}
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Link to="/login">
                    <AiOutlineLogout
                      onClick={onLogout}
                      title="Cerrar sesión"
                      className="logo-logout"
                      style={{
                        fontSize: 25,
                        background: "none",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <Link to="/login"></Link>
        </>
      )}
    </div>
  );
};

export default Header;
