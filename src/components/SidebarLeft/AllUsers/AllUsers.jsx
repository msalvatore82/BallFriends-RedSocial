import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, reset } from '../../../features/users/usersSlice';

const AllUsers = () => {
    const { user } = useSelector((state) => state.users);
    console.log(user);

    const dispatch = useDispatch();
  

    useEffect(() => {
      dispatch(getUsers());
      dispatch(reset())
    }, []);

  return (
    <div>{user}</div>
  )
}

export default AllUsers