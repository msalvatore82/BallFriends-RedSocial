/* eslint-disable eqeqeq */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

// const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  posts: [],
  isLoading: false,
  post: null,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.post = null;
    },
    setPostToEdit: (state, action) => {
      state.postToEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(like.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });
        state.post = action.payload.post;
      })
      .addCase(disLike.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
            if (post._id === action.payload.post._id) {
                post = action.payload.post;
            }
            return post;
        });
        state.post = action.payload.post;
    })
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.post._id
      );
    });
    builder
    .addCase(updatePost.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          post = action.payload.post;
        }
        return post
    })
    state.posts = posts
    })
      .addCase(updatePost.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload.post;
      });
    builder
      .addCase(getInfo.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});

export const createPost = createAsyncThunk(
  "posts/createPostByUser",
  async (post) => {
    try {
      return await postsService.createPost(post);
    } catch (error) {
      console.error(error);
    }
  }
);

export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});
export const disLike = createAsyncThunk("posts/nolikes", async (_id) => {
  try {
    return await postsService.disLike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
  try {
    return await postsService.deletePost(_id);
  } catch (error) {
    console.error(error);
  }
});
export const updatePost = createAsyncThunk(
  "posts/update",
  async (data, thunkAPI) => {
    try {
      return await postsService.updatePost(data);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (_id) => {
    try {
      return await postsService.getPostById(_id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getInfo = createAsyncThunk("auth/info", async () => {
  try {
    return await postsService.getInfo();
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
);

export const { reset, resetMessage } = postsSlice.actions;
export default postsSlice.reducer;
