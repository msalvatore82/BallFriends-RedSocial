import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts, reset } from "../../features/post/postsSlice";
import { getUsers } from "../../features/users/usersSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getAllPosts());
    getUsers()
    dispatch(reset())
  }, []);
  
  return (
    <div>
      <Post />
    </div>
  );
};

export default Posts;


// const dispatch = useDispatch();

// const getAllpostAndComment = async () => {
//   await  dispatch(getAllPosts());
//   dispatch(getAllComment())
// }

// useEffect(() => {
//   getAllpostAndComment();
//   dispatch(reset())
// }, []);