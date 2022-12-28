import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
    Post
      {posts.map((element) => (
        <div key={element._id}>
          <p >Title: {element.title}</p>
          <p>Like {element.likes}</p>
          <p >Post: {element.post}</p>
          <p></p>
        {/* <p> Date: {element.createdAt.substring(0,10)}</p> */}
       
        </div>
      ))} 
    </div>
  );
};

export default Post;