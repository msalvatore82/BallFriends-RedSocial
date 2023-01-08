import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./usersService";

const initialState = {
    users: [],
    user: {}
};

export const getUsers = createAsyncThunk("users/getUser", async() => {
    try {
        return await userService.getUsers();
    } catch (error) {
        console.error(error);
    }
});

export const getUser = createAsyncThunk(
    "users/getInfo",
    async (user) => {
      try {
        return await userService.getUser(user);
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const getUserById = createAsyncThunk(
    "users/getUserById",
    async (_id) => {
      try {
        return await userService.getUserById(_id);
      } catch (error) {
        console.error(error);
      }
    }
  );
  export const getUserByName = createAsyncThunk("users/getUserByName", async(name) => {
    try {
        return await userService.getUserByName(name);
    } catch (error) {
        console.error(error);
    }
});



// export const follow = createAsyncThunk("users/follow", async(_id) => {
//     try {
//         return await userService.follow(_id);
//     } catch (error) {
//         console.error(error);
//     }
// });

// export const unfollow = createAsyncThunk("users/unfollow", async(_id) => {
//     try {
//         return await userService.unfollow(_id);
//     } catch (error) {
//         console.error(error);
//     }
// });



// export const deleteUsers = createAsyncThunk("users/delete", async(name) => {
//     try {
//         return await userService.deleteUsers(name);
//     } catch (error) {
//         console.error(error);
//     }
// });


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
        resetSearch: (state) => {
            state.users = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(getUserByName.fulfilled,(state,action)=>{
                state.users = action.payload
              })
              .addCase(getUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            // .addCase(follow.fulfilled, (state, action) => {
            //     const users = state.users.map((user) => {
            //         if (user._id === action.payload.user._id) {
            //             user = action.payload.user;
            //         }
            //         return user;
            //     });
            //     state.users = users;
            // })
            // .addCase(unfollow.fulfilled, (state, action) => {
            //     const users = state.users.map((user) => {
            //         if (user._id === action.payload._id) {
            //             user = action.payload;
            //         }
            //         return user;
            //     });
            //     state.users = users;
            // })
           
            // .addCase(deleteUsers.fulfilled, (state, action) => {
            //     state.users = state.users.filter((user) => user._id !== action.payload.user._id)
            // })
    },
});

export const { reset, resetSearch } = usersSlice.actions;
export default usersSlice.reducer;