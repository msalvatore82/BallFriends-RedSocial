import { Card } from "antd";
import { useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      <Card>
        <div>
          miagen de portada
          <div>boton para agregar imagen</div>
        </div>
        <div>
          <div>
            imagen de perfil
            <div>bton agregar imagen</div>
          </div>
          <div>{user.user.name}</div>
          <div>boton editar perfil</div>
        </div>
        <div>
          <ul>
            <li>publicaciones</li>
            <li>informacions</li>
            <li>amigos</li>
          </ul>
        </div>
        <div className="container-head-post"></div>
        <div className="container-post">
          <p>{user.user.email}</p>
        </div>
      </Card>
    </div>
  );
};

export default User;
