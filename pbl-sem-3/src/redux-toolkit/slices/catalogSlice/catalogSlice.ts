import {  createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import axios from 'axios'
import { Course, Review } from '../userSlice/userSlice'

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
            profile_picture: null,
            rating_value: number | null

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
    query: Query,
    tutor: Tutor;
}

interface Tutor{
   
        profile_type: number,
        first_name: string,
        last_name: string,
        contact_mail: string,
        phone_number: string,
        about_me: null,
        is_verified: false,
        is_trusted: false,
        date_of_birth: null,
        location: string,
        profile_picture: null,
        rating_value: number,
        reviews: Review[],
        courses: Course[]
    
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
    tutor: {} as Tutor,
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

export const openProfile = createAsyncThunk(
    'catalog/openProfile', 
   async (id: string) => {
    console.log(`http://127.0.0.1:8000/api/cabinet/` +id);
        return await axios.get(`http://127.0.0.1:8000/api/cabinet/` +id).then((res) => {
            console.log(res.data);
            
            return res.data;
        })
   }
)

export const leaveReview = createAsyncThunk(
    'catalog/leaveReview',
    async({review_by, review_for, review_text}: {review_by: string, review_for: string, review_text: string}) =>{
        return await axios.post(`http://127.0.0.1:8000/api/cabinet/`+review_for+`/new-review`, {review_text}, {headers: {Authorization :'Token ' + review_by}}).then((res) => {
            console.log(res.data);
        })
    }
)
export const leaveRating = createAsyncThunk(
    'catalog/leaveRating',
    async({rating_by, rating_for, rating_value}: {rating_by: string, rating_for: string, rating_value: string}) =>{
        return await axios.post(`http://127.0.0.1:8000/api/cabinet/`+rating_for+`/new-rating`, {rating_value}, {headers: {Authorization :'Token ' + rating_by}}).then((res) => {
            console.log(res.data);
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
    }).addCase(openProfile.pending, (state) =>{
        state.loading = 'pending';
    }).addCase(openProfile.fulfilled, (state, payload) =>{
        state.loading = 'fulfilled';
        state.tutor = payload.payload;
    }).addCase(openProfile.rejected, (state, payload) =>{
        state.loading = 'rejected';
        state.error = payload.error;
        console.log(payload.error.message);
   })
}})

export const {getSubject, getLocation, getFormat, getMin, getMax} = catalogSlice.actions;
export default catalogSlice.reducer;