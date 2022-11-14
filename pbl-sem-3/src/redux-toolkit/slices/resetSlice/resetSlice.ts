import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface resetData{
    confirmationCode: string,
    password: string,
    confirmPassword: string,
}

interface resetState{
    data: resetData
}

const initialState: resetState ={
    data :{} as resetData
}

export const resetSlice = createSlice({
    name: "reset",
    initialState,
    reducers:{
        GetData : (state: resetState, action: PayloadAction<resetData>) => {
            state.data = action.payload;
        }
    }
})

export const {GetData} = resetSlice.actions;
export default resetSlice.reducer;