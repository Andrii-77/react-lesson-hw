import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[]
}

const initCommentSliceState: CommentSliceType = {comments: []};

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    try {
        const comments = await getAll<IComment[]>('/comments');
        console.log(comments);
        return thunkAPI.fulfillWithValue(comments);
        // throw new Error();
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Some Comments ERROR');
    }
});

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    })
        .addCase(loadComments.rejected, (state, action) => {
            console.log(state);
            console.log(action.payload);
        })
});

export const commentActions = {...commentSlice.actions, loadComments};