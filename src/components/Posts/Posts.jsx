import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletePost, getAllPosts, reset } from "../../features/post/postsSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getAllPosts());
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