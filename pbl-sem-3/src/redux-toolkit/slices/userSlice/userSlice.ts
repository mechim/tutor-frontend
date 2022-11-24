import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import Password from "antd/lib/input/Password";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {IUser} from "../loginSlice/loignSlice"

export interface Review{
    id: number,
    review_by_id: number,
    review_for_id: number,
    review_text: string,
    review_date: string,
    author_name: string
}

export interface Course{
    id: number,
    subject_id :number,
    price:  number,
    lesson_format: number,
    profile_id :number,
    subject_name: string
}
interface UserData{
        profile_type: number,
        first_name: string,
        last_name: string,
        contact_mail: string,
        phone_number: string,
        about_me: string | null,
        is_verified: boolean,
        is_trusted: boolean,
        date_of_birth: string | null,
        location: string,
        profile_picture: string | null,
        rating_value: number | null,
        reviews: Review[],
        courses: Course[]
}

interface userState {
    user: UserData;
    loading: string;
    error: SerializedError | null;
}

const initialState: userState = {
    user: {} as UserData,
    loading: '',
    error: null,
}

export const userInfo = createAsyncThunk(
    'userSlice/userInfo', async(token: string) => {
     return await axios.get(`http://127.0.0.1:8000/api/cabinet/me`, {headers : {Authorization :'Token ' + token}}).then((res) => {
      console.log(res.data);
      return res.data;
    })
  })




export const userSlice = createSlice({
    name: "user",initialState, reducers:{
        displayUser: (state: userState, action: PayloadAction<String>) => {
            // state.user = action.payload;
            axios.get(`http://127.0.0.1:8000/api/cabinet/me`);
            console.log();
        },
        killUser: (state: userState, action: PayloadAction) => {
            state.user = {} as UserData;
        }

    },
    extraReducers:(builder) => {
        builder.addCase(userInfo.pending, (state) => {
            state.loading = 'pending';
        }).addCase(userInfo.fulfilled, (state, payload) => {
            state.loading = 'fulfilled';
            state.user = payload.payload;
        }).addCase(userInfo.rejected, (state, payload) => {
            state.error = payload.error;
            console.log(payload.error.message);
        })
    }
})


export const {displayUser, killUser} = userSlice.actions
export default userSlice.reducer