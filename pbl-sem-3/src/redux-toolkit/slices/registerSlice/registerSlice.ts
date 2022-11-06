import {  createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import axios from 'axios'

interface NewUser{
    email: string;
    password: string;
    confirmPassword: string;
}

interface RegisterState{
    newUser: NewUser;
    loading: string;
    token: string | null;
    error: SerializedError | null;
}

const initialState: RegisterState = {
    newUser: {} as NewUser,
    loading: '',
    token: '',
    error: null,
}

export const creation = createAsyncThunk('registerSlice/createUser', async(id: number) => {
    return await axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
        return res.data;
    })
})

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        create: (state: RegisterState, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.token = action.payload;
        },
        postUser:(state: RegisterState, action: PayloadAction<NewUser>) => {
            state.newUser.email = action.payload.email;
            state.newUser.password = action.payload.password;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(creation.pending, (state) => {
          state.loading = 'pending';
        }).addCase(creation.fulfilled, (state, payload) => {
          state.loading = 'fullfilled';
          // state.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
          console.log(payload);
    
        }).addCase(creation.rejected, (state, payload) => {
          state.loading = 'idol';
          state.error = payload.error;
          console.log(payload.error.message);
        })
      }
})

export const {create, postUser} = registerSlice.actions;
export default registerSlice.reducer;