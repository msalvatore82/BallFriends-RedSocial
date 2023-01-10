/* eslint-disable eqeqeq */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

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
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
