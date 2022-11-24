import {  createAsyncThunk, createSlice, SerializedError, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import axios from 'axios'

export interface NewUser{
    email: string;
    password: string;
    confirm_password: string;
}

interface NewTutor{
    first_name: string;
    last_name: string;
    location: string;
}

interface NewStudent{

}

interface RegisterState{
    newUser: NewUser;
    newTutor: NewTutor;
    newStudent: NewStudent;
    loading: string;
    token: string | null;
    error: SerializedError | null;
}

const initialState: RegisterState = {
    newUser: {} as NewUser,
    newStudent: {} as NewStudent,
    newTutor: {} as NewTutor,
    loading: '',
    token: '',
    error: null,
}

export const createUser = createAsyncThunk('registerSlice/createUser', 
    async({email, password, confirm_password}: {email: string, password: string, confirm_password: string}) => {
    return await axios.post(`http://127.0.0.1:8000/api/authen/register/register-user`, {email, password, confirm_password}).then((res) => {
    console.log(res.data);    
    return res.data;

    })
})

export const createTutor = createAsyncThunk('registerSlice/createTutor', 
    async({first_name, last_name, location}: {first_name:string, last_name:string, location: string}) =>{
        return await axios.post(`http://127.0.0.1:8000/api/authen/register/register-tutor`, {first_name, last_name, location}).then((res) => {
            console.log(res.data);
            return res.data;
        })
    })

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        create: (state: RegisterState, action: PayloadAction<NewUser>) => {
            state.newUser.email = action.payload.email;
            state.newUser.password = action.payload.password;
            state.newUser.confirm_password = action.payload.confirm_password;
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending, (state) => {
          state.loading = 'pending';
        }).addCase(createUser.fulfilled, (state, payload) => {
          state.loading = 'fullfilled';
          sessionStorage.setItem('user-id', payload.payload['id']);
        }).addCase(createUser.rejected, (state, payload) => {
          state.loading = 'idol';
          state.error = payload.error;
          console.log(payload.error.message);
        })
      }
})

export const {create} = registerSlice.actions;
export default registerSlice.reducer;