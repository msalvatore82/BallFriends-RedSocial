import User from "./User/User";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../features/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();

  const Users = async () => {
    dispatch(getUser());
  };


  useEffect(() => {
    Users();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <User />
    </div>
  );
};

export default Users;