import { configureStore } from '@reduxjs/toolkit'
import {catalogSlice} from '../slices/catalogSlice/catalogSlice'
import { loginSlice } from '../slices/loginSlice/loignSlice'
import {forgotSlice} from '../slices/forgotPasswordSlice/forgotPasswordSlice'
import {registerSlice} from '../slices/registerSlice/registerSlice'
import {resetSlice} from '../slices/resetSlice/resetSlice'
// ...

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    tutorCard: catalogSlice.reducer,
    register: registerSlice.reducer,
    forgot: forgotSlice.reducer,
    reset: resetSlice.reducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch