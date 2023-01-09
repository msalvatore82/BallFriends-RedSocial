import avatar from "../../../Asset/avatar-default.png";
import { MdAddAPhoto, MdModeEdit } from "react-icons/md";
import "./User.scss";
import { Link } from "react-router-dom";
import InfoUser from "./Nav/infoUser/InfoUser";
import FriendUser from "./Nav/FriendsUser/FriendUser";
import PostUser from "./Nav/Postuser/PostUser";
import MoreAthletes from "./Nav/MoreAthletes/MoreAthletes";

const User = () => {
  return (
    <div className="body-user">
      <div className="card-user">
        <div className="cover-img">
          <div>
            <div className="icon-img-cover">
              <MdAddAPhoto title="Añadir foto de portada" />
            </div>
          </div>
        </div>
        <div className="nav-img-name">
          <div>
            <img src={avatar} alt="" srcset="" className="user-avatar" />
            <div className="icon-img-user">
              <MdAddAPhoto />
            </div>
          </div>
          <div className="name-user">Usuario</div>
          <div className="btn-profi">
            <button className="btn-edit-profile">
              <MdModeEdit style={{ background: "none" }} /> Editar perfil{" "}
            </button>
          </div>
        </div>
        <div>
          <ul className="nav-user">
            <Link
              className="iten-nav-user"
              to="/PostUser"
              element={<PostUser />}
            >
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
            <Link
              className="iten-nav-user"
              to="/MoreAthletes "
              element={<MoreAthletes />}
            >
              <li className="iten-nav-user">
                <span>+</span> Deportistas
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
