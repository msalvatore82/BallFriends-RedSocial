import React from 'react'
import { useSelector } from 'react-redux';
import User from '../../User'

const MoreAthletes = () => {
    const { users } = useSelector((state) => state.users);
    console.log(users);

  return (
    <div>
        <User/>
        todos los usuarios
    </div>
  )
}

export default MoreAthletes