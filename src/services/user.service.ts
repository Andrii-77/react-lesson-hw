import axios from 'axios';
import {IUser} from "../model/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set("XXX", "XXXX");
    console.log(request.method);
    return request;

});

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>('/users', user);

    return data;
}

// fetch('YOURURL', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     key1: 'value1',
//     key2: 'value2',
//   })
// })