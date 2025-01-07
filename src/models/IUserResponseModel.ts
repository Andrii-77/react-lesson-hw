import {IUser} from "./IUser.ts";

export interface IUserResponseModel {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}