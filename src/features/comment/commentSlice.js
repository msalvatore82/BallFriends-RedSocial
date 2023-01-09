/* eslint-disable eqeqeq */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

// const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  comments: [],
  isLoading: false,
  comment: {},
  likesC: [],
};

export const getAllComment = createAsyncThunk(
  "comment/getAllComment",
  async () => {
    try {
      return await commentService.getAllComment();
    } catch (error) {
      console.error(error);
    }
  }
);
export const createComment = createAsyncThunk(
  "comment/comment",
  async (formData) => {
    try {
      return await commentService.createComment(formData);
    } catch (error) {
      console.error(error);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (_id) => {
    try {
      return await commentService.deleteComment(_id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const likeComment = createAsyncThunk(
  "comment/likeComment",
  async (_id) => {
    try {
      return await commentService.likeComment(_id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.commentsLengthOffset = 0;
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(getAllComment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments = [action.payload.comment, ...state.comments];
      });
    builder
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload.comment._id
        );
      })
      .addCase(likeComment.fulfilled, (state, action) => {
        state.comments = state.comments.map((comment) => {
          if (comment._id === action.payload.comment._id) {
            comment = action.payload.comment;
          }
          return comment;
        });
      });
    //     .addCase(like.fulfilled,(state,action)=>{
    //       state.posts = state.posts.map( post =>{
    //           if(post._id == action.payload._id){
    //               post = action.payload
    //           }
    //           return post
    //       })
    //     });
    //     .addCase(getPostById.fulfilled,(state,action)=>{
    //         state.post = action.payload
    //     })
    //     .addCase(getPostByName.fulfilled,(state,action)=>{
    //       state.posts = action.payload
    //     })
    //     .addCase(destroyPostById.fulfilled,(state,action)=>{
    //       state.posts = state.posts.filter(post => post.id !== +action.payload.id)
    //     })
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
