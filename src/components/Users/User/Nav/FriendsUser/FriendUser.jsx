import React from 'react'
import { useSelector } from 'react-redux';
import User from '../../User';

const FriendUser = () => {
    const { user } = useSelector((state) => state.users);
    console.log(user);

  return (
    <div>
        <User/>
    
    <p> {user.user.seguidos.length}</p>
    </div>
  )
}

export default FriendUser