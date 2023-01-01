/* eslint-disable eqeqeq */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

// const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  posts: [],
  isLoading: false,
  post:{},
  like: []
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});

export const createPost = createAsyncThunk("posts/createPostByUser", async (post) => {
  try {
    return await postsService.createPost(post);
  } catch (error) {
    console.error(error);
  }
});

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



// export const getPostById = createAsyncThunk("posts/getPostById", async (id)=>{
//     try {
//         return await postsService.getPostById(id)
//     } catch (error) {
//         console.error(error)
//     }
// })

// export const getPostByName = createAsyncThunk("posts/getPostByName", async(title)=>{
//   try {
//     return await postsService.getPostByName(title)
//   } catch (error) {
//     console.error(error)
//   }
// })

// export const destroyPostById = createAsyncThunk("posts/destroyPostById",async(id)=>{
//   try {
//     return await postsService.destroyPostById(id)
//   } catch (error) {
//     console.error(error)
//   }
// })

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
        state.isLoading = false;
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
      .addCase(like.fulfilled,(state,action)=>{
        state.posts = state.posts.map( post =>{
            if(post._id == action.payload._id){
                post = action.payload
            }
            return post
        })
      })
      builder.addCase(disLike.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });
        state.posts = posts;
      })
      builder
      .addCase(deletePost.fulfilled, (state,action)=>{
        state.posts = state.posts.filter((post) => post._id !== action.payload.post._id) 
      });
      
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

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;