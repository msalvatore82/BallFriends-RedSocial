import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/auth/authSlice";

const Profile = () => {
    const { user,  } = useSelector((state) => state.auth);

const dispatch = useDispatch();

const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser());
    console.log(user);
  };

  return (
    <div>
        
     <h1>Profile</h1>
     <button style={{
                width: 200,
                height:200
              }} onClick={onSubmit}   > </button>

    </div>
  );
};

export default Profile;

