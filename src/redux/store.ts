import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "./slices/PostSlice.ts";
import {userSlice} from "./slices/UserSlice.ts";
import {commentSlice} from "./slices/CommentSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();