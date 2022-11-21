import {  createAsyncThunk, createSlice, SerializedError,PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import axios from 'axios'
import { Action } from '@remix-run/router';

//INTERFACE FOR USER
export interface IUser{
  email:string;
  password: string;
  isLogged: boolean;
  user ?: BackUser;
}

interface BackUser{
  name: string;
  email: string;
  image: string;

}
//STATES
interface LoginState{
  user: IUser,
  loading: string;
  token: string | null;
  error: SerializedError | null;
}
//INITIAL STATE
const initialState: LoginState = {
  user: {} as IUser,
  loading: '',
  token: '',
  error: null,
}



//ACTION
export const authentification = createAsyncThunk('loginSlice/sendUser', async(id: any) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
    return res.data;
  })
})

//REDUCER
// export const registration
export const loginSlice = createSlice({
  name: 'login',
    // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    auth: (state: LoginState, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.token = action.payload;
    }, 
    getUser:(state: LoginState, action: PayloadAction<IUser>) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.user.isLogged = action.payload.isLogged;
      sessionStorage.setItem('user-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' );

    },
  },
  extraReducers:(builder)=>{
    builder.addCase(authentification.pending, (state) => {
      state.loading = 'pending';
    }).addCase(authentification.fulfilled, (state, payload) => {
      state.loading = 'fullfilled';
      // state.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      console.log(payload);
      sessionStorage.setItem('user-token',payload.payload );

    }).addCase(authentification.rejected, (state, payload) => {
      state.loading = 'idol';
      state.error = payload.error;
      console.log(payload.error.message);
    })
  }
})

export const {auth, getUser} = loginSlice.actions
export default loginSlice.reducer
