import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSilce.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
        // postSlice:null
    }
});