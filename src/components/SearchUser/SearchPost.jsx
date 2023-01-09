import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByName } from "../../features/post/postsSlice";
import { getInfo } from "../../features/users/usersSlice";
import Post from "../Posts/Post/Post";
import "./searchPost.scss"

const SearchPost = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostByName(title));
  }, [title]);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  return (
    <>
      <div className="container-search">
        <Post />
      </div>
    </>
  );
};

export default SearchPost;
