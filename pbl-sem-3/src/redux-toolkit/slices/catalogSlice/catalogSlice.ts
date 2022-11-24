import {  createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import axios from 'axios'

export interface CourseCard{
    
        id: number,
        subject: {
            id: number,
            subject_name: string
        },
        profile: {
            id: number,
            user: {
                id: number,
                last_login: null,
                reg_date: string,
                is_staff: boolean,
                is_superuser: boolean
            },
            profile_type: number,
            first_name: string,
            last_name: string,
            contact_mail: string,
            phone_number: string,
            about_me: string | null,
            is_verified: boolean,
            is_trusted: boolean,
            date_of_birth: null,
            location: string,
            profile_picture: null
        },
        price: number,
        lesson_format: number
    
}

interface CatalogState{
    tutorsArray: CourseCard[],
    loading:string,
    error: SerializedError |null,
}


const initialState: CatalogState = {
    tutorsArray: [],
    loading: '',
    error: null
}

export const displayCatalog = createAsyncThunk(
    'catalog/display', 
   async () => {
        return await axios.get(`http://127.0.0.1:8000/api/catalog/?subject=&format=&min=0&max=999`).then((res) => {
            console.log(res.data);
            return res.data;
        })
   }
)

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers:{
        default :(state: CatalogState, action: PayloadAction<String>) =>{
            console.log(action.payload);
        }
    },
   extraReducers:(builder)=>{
    builder.addCase(displayCatalog.pending, (state) =>{
        state.loading = 'pending';
    }).addCase(displayCatalog.fulfilled, (state, payload) =>{
        state.loading = 'fulfilled';
        state.tutorsArray = payload.payload;
    }).addCase(displayCatalog.rejected, (state, payload) =>{
        state.loading = 'rejected';
        state.error = payload.error;
        console.log(payload.error.message);
    })
   }
})

export const {} = catalogSlice.actions;
export default catalogSlice.reducer;