import { useSelector } from "react-redux";
import avatar from "../../../Asset/avatar-default.png";
import { MdAddAPhoto, MdModeEdit } from "react-icons/md";
import "./User.scss";

const User = () => {
  const { user } = useSelector((state) => state.users);
  console.log(user);
  return (
    <div className="body-user">
      <div className="card-user">
        <div className="cover-img">
          <div>
            <div className="icon-img-cover">
              
              <MdAddAPhoto /> Añadir foto de portada
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
          {/* <div className="name-user">{user.user.name}</div> */}
          <div className="name-user">Usuario</div>
          <div className="btn-profi" > <button className="btn-edit-profile"> <MdModeEdit style={{background:"none" } } /> Editar perfil </button></div>
        </div>
        <div>
          <ul className="nav-user">
            <li className="iten-nav-user">publicaciones</li>
            <li className="iten-nav-user">informacions</li>
            <li className="iten-nav-user">amigos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
