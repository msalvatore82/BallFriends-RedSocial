import React from "react";
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
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

     useNavigate();
  const { Search } = Input;
  return (
    <div className="header-nav">
      {user ? (
        <>
      <nav className="nav">
        <div className="nav-left">
          <div className="picture">
            <Link to="/home" >
            <img src={isolgo} alt="isologo" className="isologo" />
            </Link>
          </div>
          <div>
            <Search
              placeholder="input search text"
              //   onSearch={onSearch}
              style={{
                width: 200,
              }}
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
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                }}
              />
            </Link>
            <Link to="/teams"> 
            <TeamOutlined
             title="Equipos"
              style={{
                fontSize: 25,
                marginLeft: 15,
              }}
            />
            </Link>
            <Link to="/Myteams"> 
            <SkinFilled
            title="Mis-Equipos"
              style={{
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
              style={{
                fontSize: 25,
              }}
            />
          </div>
          <div>
            <MessageOutlined
              style={{
                fontSize: 25,
              }}
            />
          </div>
          <div>
            <AlertOutlined
              style={{
                fontSize: 25,
              }}
            />
          </div>
          <div>
            <Link to="/user">
              {" "}
              <UserOutlined
                style={{
                  fontSize: 25,
                }}
              />{" "}
            </Link>
          </div>
        </div>
        
      </nav>
      </>
       ) : (
        <>
        </>
  )}
    </div>
  );
};

export default Header;
