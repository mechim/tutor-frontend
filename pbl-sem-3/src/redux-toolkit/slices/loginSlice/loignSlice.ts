import {  createAsyncThunk, createSlice, SerializedError,PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import axios from 'axios'

// Define a type for the slice state
interface IUser{
  email:string;
  password: string;
}
interface LoginState{
  user: IUser,
  loading: string;
  token: string | null;
  error: SerializedError | null;
}
// Define the initial state using that type
const initialState: LoginState = {
  user: {} as IUser,
  loading: '',
  token: '',
  error: null,
}

export const authentification = createAsyncThunk('loginSlice/sendUser', async(id: any) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
    return res.data;
  })
})

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
  },
  extraReducers:(builder)=>{
    builder.addCase(authentification.pending, (state) => {
      state.loading = 'pending';
    }).addCase(authentification.fulfilled, (state, payload) => {
      state.loading = 'fullfilled';
      // state.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      console.log(payload);

    }).addCase(authentification.rejected, (state, payload) => {
      state.loading = 'idol';
      state.error = payload.error;
      console.log(payload.error.message);
    })
  }
})

export const {auth, getUser} = loginSlice.actions
export default loginSlice.reducer
