import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice'
import posts from "../features/post/postsSlice"
import comments from "../features/comment/commentSlice"
import users from "../features/users/usersSlice"

export const store = configureStore({
  reducer: {
    auth,
    posts,
    comments,
    users
  },
});
