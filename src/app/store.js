import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice'
import posts from "../features/post/postsSlice"
import comments from "../features/comment/commentSlice"

export const store = configureStore({
  reducer: {
    auth,
    posts,
    comments
  },
});
