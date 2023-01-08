import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getPostByName } from '../../features/post/postsSlice';
import Post from '../Posts/Post/Post';

const SearchPost = () => {
    const { postName } = useParams();
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostByName(postName))
  }, [postName]);

  return (
    <div>
        <Post />
    </div>
  )
}

export default SearchPost