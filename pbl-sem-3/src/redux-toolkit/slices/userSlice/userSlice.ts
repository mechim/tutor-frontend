import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Password from "antd/lib/input/Password";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {IUser} from "../loginSlice/loignSlice"

interface userState {
    user: IUser;
}

const initialState: userState = {
    user: {} as IUser
}

export const userSlice = createSlice({
    name: "user",initialState, reducers:{
        login: (state: userState, action: PayloadAction<String>) => {
            // state.user = action.payload;
            console.log(action.payload);
        },
        getUser: (state: userState, action: PayloadAction<IUser>) =>{
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
        }
    },
})
