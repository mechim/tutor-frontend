import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, authentification, getUser} from "../loginSlice/loignSlice";

interface forgotState {
    email:string;
}

const initialState: forgotState={
    email: ""
}



export const forgotSlice = createSlice({
    name: "forgot",
    initialState,
    reducers:{
        getEmail:(state: forgotState, action:PayloadAction<string>) => {
            state.email = action.payload;
            console.log(action.payload);
        }
    }   
})

export const {getEmail} = forgotSlice.actions
export default forgotSlice.reducer