import {  createAsyncThunk, createSlice, SerializedError,PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import axios from 'axios'
import { Action } from '@remix-run/router';
import { useAppDispatch } from '../../hooks/hooks';
import { getEmail } from '../forgotPasswordSlice/forgotPasswordSlice';

//INTERFACE FOR USER
export interface IUser{
  email:string;
  password: string;
  isLogged: boolean;
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
export const authentification = createAsyncThunk(
  'loginSlice/sendUser', async({email, password}: {email: string, password: string}) => {
   return await axios.post(`http://127.0.0.1:8000/api/authen/login`, {email, password}).then((res) => {
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

    },
    logout:(state: LoginState, action:PayloadAction) =>{
        sessionStorage.removeItem('user-token');
        sessionStorage.removeItem('is-logged');
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(authentification.pending, (state) => {
      state.loading = 'pending';
    }).addCase(authentification.fulfilled, (state, payload) => {
      state.loading = 'fulfilled';
      console.log(payload);
      state.token = payload.payload['auth_token'];
      state.user.isLogged = true;
      sessionStorage.setItem('user-token',payload.payload['auth_token']);
      sessionStorage.setItem('is-logged',String(state.user.isLogged ) );
    }).addCase(authentification.rejected, (state, payload) => {
      state.loading = 'idol';
      state.error = payload.error;
      console.log(payload.error.message);
    })
  }
})

export const {auth, getUser, logout} = loginSlice.actions
export default loginSlice.reducer
