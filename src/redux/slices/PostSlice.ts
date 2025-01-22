import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[]
}

const initPostSliceState: PostSliceType = {posts: []};

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    try {
        const posts = await getAll<IPost[]>('/posts');
        console.log(posts);
        return thunkAPI.fulfillWithValue(posts);
        // throw new Error();
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Some Posts ERROR');
    }
});

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    })
        .addCase(loadPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action.payload);
        })
});

export const postActions = {...postSlice.actions, loadPosts};