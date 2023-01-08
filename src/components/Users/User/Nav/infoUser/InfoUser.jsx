import React from "react";
import { useSelector } from "react-redux";
import User from "../../User";
import avatar from "../../../../../Asset/avatar-default.png";
import avatar1 from "../../../../../Asset/avatar1.jpg";

import "./InfoUser.scss";
import FriendUser from "../FriendsUser/FriendUser";
import { Link, useNavigate } from "react-router-dom";
import PostUser from "../Postuser/PostUser";
import { MdModeEdit } from "react-icons/md";
import { HomeFilled } from "@ant-design/icons";

const InfoUser = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.users);
  console.log(user);
  return (
    <div>
      <div className="nav-info-user">
        <ul className="nav-user">
          <Link className="iten-nav-user" to="/PostUser" element={<PostUser />}>
            <li className="iten-nav-user">Publicaciones</li>
          </Link>
          <Link
            className="iten-nav-user"
            to="/InfoUser "
            element={<InfoUser />}
          >
            <li className="iten-nav-user">Informacion de Perfil</li>
          </Link>
          <Link
            className="iten-nav-user"
            to="/FriendUser "
            element={<FriendUser />}
          >
            <li className="iten-nav-user">Mis Amigos</li>
          </Link>
        </ul>
      </div>
      <div>
        <div className="container-user-info">
          <div className="info-user">
            <div className="avatar-infouser">
              <img src={avatar1} alt="avatar-user" className="avatar-infouser" />
            </div>
            <div className="name-mail-infouser">
              <p className="name">{user.user.name} </p>
              <p className="mail">{user.user.email} </p>
            </div>
            <div className="about-me">
              <h2>Sobre Mi</h2>
              <p className="text-about-me">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                deleniti, tenetur officiis rerum officia iusto iure accusantium
              </p>
            </div>
            <div>
              <button className="btn-edit-profile">
                <MdModeEdit style={{ background: "none" }} /> Editar perfil{" "}
              </button>
            </div>
            <p className="count-follower-following">
              {user.user.seguidos.length} following -{" "}
              {user.user.followers.length} followers{" "}
            </p>
          </div>
          <div className="info-detail">
            <div>
              <iframe
                className="video-cv"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rycJYxWVPF4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <div className="info-activity">
                <div className="item-activity">
                  {user.user.likes.length} likes en post{" "}
                </div>
                <div className="item-activity">
                  {user.user.postIds.length} publicaciones{" "}
                </div>
              </div>
              <div className="item-activity-post">
                {user.user.postIds.map((element, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(`/post/${element._id}`)}
                  >
                    <div className="post-one-user"> {element.post} </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <p>
          Volver al Home{" "}
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
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoUser;
