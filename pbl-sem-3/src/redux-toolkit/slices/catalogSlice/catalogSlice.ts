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
interface Query{
    subject: string,
    lesson_format: string,
    min: string,
    max: string,
    location: string;
}

interface CatalogState{
    tutorsArray: CourseCard[],
    loading:string,
    error: SerializedError |null,
    query: Query;
}


const initialState: CatalogState = {
    tutorsArray: [],
    loading: '',
    error: null,
    query: {
        subject: "",
        lesson_format:"",
        location: "",
        min: "",
        max: ""
    } as Query,
}

export const displayCatalog = createAsyncThunk(
    'catalog/display', 
   async ({subject, lesson_format, location, min, max} : {subject: string, lesson_format: string, location: string, min: string, max: string}) => {
    console.log(`http://127.0.0.1:8000/api/catalog/?subject=` +subject+ `&lesson_format=`+lesson_format+`&location=`+location+`&min=`+min+`&max=`+max);
        return await axios.get(`http://127.0.0.1:8000/api/catalog/?subject=` +subject+ `&lesson_format=`+lesson_format+`&location=`+location+`&min=`+min+`&max=`+max).then((res) => {
            console.log(res.data);
            
            return res.data;
        })
   }
)

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers:{
        getSubject :(state: CatalogState, action: PayloadAction<string>) =>{
            state.query.subject = action.payload;
        },
        getFormat :(state: CatalogState, action: PayloadAction<string>) =>{
            state.query.lesson_format = action.payload;
            if (state.query.lesson_format === "1"){
                state.query.location = "";
            }
        },
        getLocation :(state: CatalogState, action: PayloadAction<string>) =>{
            console.log(action.payload);
            if (state.query.lesson_format === "2"){
                state.query.location = action.payload;
            } else {
                state.query.location = "";
            }
           
        },
        getMin:(state: CatalogState, action: PayloadAction<string>) =>{
            state.query.min = action.payload;
        },
        getMax:(state: CatalogState, action: PayloadAction<string>) =>{
            state.query.max = action.payload;
        },
        
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

export const {getSubject, getLocation, getFormat, getMin, getMax} = catalogSlice.actions;
export default catalogSlice.reducer;