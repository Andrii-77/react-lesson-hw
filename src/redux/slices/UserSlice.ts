import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[]
}

const initUserSliceState: UserSliceType = {users: []};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await getAll<IUser[]>('/users');
    console.log(users);
    return thunkAPI.fulfillWithValue(users);
});

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
    }),
});

export const userActions = {...userSlice.actions, loadUsers};