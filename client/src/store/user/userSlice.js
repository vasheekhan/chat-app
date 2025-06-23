import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk';



export const userSlice = createSlice({
  name: 'counter',
  initialState:{
    isAuthenticated:false
  },
  reducers: {
   Login:()=>{
    console.log("hello login");
   }
  },
  extraReducers:(builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fulfilled")
      // Add user to the state array
     
    });
      builder.addCase(loginUserThunk.pending, (state, action) => {
      // Add user to the state array
      console.log("pending")
    
    });
      builder.addCase(loginUserThunk.rejected, (state, action) => {
      // Add user to the state array
      console.log("rejected")
     
    });
  },
})

// Action creators are generated for each case reducer function

export const { Login } = userSlice.actions
export default userSlice.reducer