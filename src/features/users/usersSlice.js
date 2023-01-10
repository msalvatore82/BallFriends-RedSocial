import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./usersService";

const initialState = {
    users: [],
    user: {}
    
};


export const getInfo = createAsyncThunk(
    "users/getInfo",
    async (user) => {
      try {
        return await userService.getInfo(user);
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



export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
            state.users = [];
        },
        resetSearch: (state) => {
            state.users = []
        }
    },
    extraReducers: (builder) => {
        builder
       
            .addCase(getInfo.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(getUserByName.fulfilled,(state,action)=>{
                state.users = action.payload
              })
              .addCase(getUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })

    },
});

export const { reset, resetSearch, users } = usersSlice.actions;
export default usersSlice.reducer;