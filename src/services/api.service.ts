import {IRecResInResponse} from "../models/IRecResInResponse.ts";

export const getAllUsers = async (pg: string): Promise<IRecResInResponse> => {
    return  await fetch('https://reqres.in/api/users?page=' + pg)
        .then(value => value.json());

};
