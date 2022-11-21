import {  createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'

export interface TutorCard{
    tutorImage: string,
    tutorName: string,
    tutorSubject: string,
    rating: number,
    format: string,
    description: string,
    price: string | number,
    id: number
}

interface CatalogState{
    tutorsArray: TutorCard[],
}

const initialState: CatalogState = {
    tutorsArray: [{tutorImage: "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
    tutorName: "John Doe",
    tutorSubject: "Istoria",
    format:"Online",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mulla eget rhoncus nisi",
    price: "100",
    rating: 5,
    id: 0
},
{tutorImage: "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
    tutorName: "Vova Doe",
    tutorSubject: "Matematica",
    format:"Online",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mulla eget rhoncus nisi",
    price: "100",
    rating: 5,
    id: 1
},
{tutorImage: "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
    tutorName: "Vasea Doe",
    tutorSubject: "Romana",
    format:"Istoria",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mulla eget rhoncus nisi",
    price: "100",
    rating: 5,
    id: 2
},
{tutorImage: "https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg",
    tutorName: "John Doe",
    tutorSubject: "Istoria",
    format:"Online",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mulla eget rhoncus nisi",
    price: "100",
    rating: 5,
    id: 3
}]
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers:{
        displayCatalog: (state: CatalogState, action: PayloadAction<string>) => {
            console.log(action.payload);
           
        }

    },
   
})

export const {displayCatalog} = catalogSlice.actions;
export default catalogSlice.reducer;