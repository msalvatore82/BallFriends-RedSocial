import React from 'react'
import { useSelector } from 'react-redux';
import User from '../../User';

const InfoUser = () => {
    const { user } = useSelector((state) => state.users);
    const { posts } = useSelector((state) => state.posts);


  return (
    <div>
    <User/>
    <div>
        <p>informacion del usuario aca</p>
        <p>{user.user.name} </p> 
        <p>{user.user.email} </p> 
        <p>{user.user.likes.length} likes en post </p> 
        <p>{user.user.postIds.length} post </p> 
        <p>{user.user.postIds.map((element, idx)=> (
            <div key={idx}>
                <div>
                    {element.post}
                </div>
            </div>
        ))}  </p> 
       
    </div>
    </div>
  )
}

export default InfoUser