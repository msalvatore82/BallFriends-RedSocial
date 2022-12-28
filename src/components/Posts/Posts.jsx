import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts, reset } from "../../features/post/postsSlice";
import Post from "./Post/Post";
const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(reset())
  }, []);
  
  return (
    <div>
      Creando compoente Posts
      <Post />
    </div>
  );
};

export default Posts;