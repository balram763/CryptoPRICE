import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const authSlice = createSlice({
  name : 'auth',
  initialState : {
    user : null,
    isLoading : false,
    isError : false,
    isSuccess : false,
  },
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase(loginUser.fulfilled,(state,action)=>{
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    }).addCase(loginUser.rejected,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      // state.message = action.payload;
    }).addCase(loginUser.pending,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = true;
      state.isError = false;
    }).addCase(registerUser.fulfilled,(state,action)=>{
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    }).addCase(registerUser.rejected,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
    }).addCase(registerUser.pending,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = true;
      state.isError = false;
    }).addCase(logOutUser.fulfilled,(state,action)=>{
      state.user = null
    })
  }

})

export const loginUser = createAsyncThunk("LOGIN/AUTH",async(formData)=>{
    try {
      return await authService.login(formData)
    } catch (error) {
      console.log(error)
    }
})
export const registerUser = createAsyncThunk("REGISTER/AUTH",async(formData)=>{
    try {
      return await authService.register(formData)
    } catch (error) {
      console.log(error)
    }
})
export const logOutUser = createAsyncThunk("LOGOUT/AUTH",async()=>{
    try {
      return await authService.logOut()
    } catch (error) {
      console.log(error)
    }
})

export default authSlice.reducer