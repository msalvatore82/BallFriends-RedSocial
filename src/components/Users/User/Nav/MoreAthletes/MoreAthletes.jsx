import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../../features/auth/authSlice";
import User from "../../User";
import "./MoreAthletes.scss";

const MoreAthletes = () => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <User />
      <div className="contaner-MoreAthle">aca los ateltas</div>
    </div>
  );
};

export default MoreAthletes;
