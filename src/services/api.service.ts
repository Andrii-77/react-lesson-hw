// import {baseUrl} from "../constants/urls.ts";

// export const userService = {
//     getAllUsers: async (): Promise<IUser[]> => {
//         const users = await fetch(baseUrl + '/users')
//             .then(value => value.json());
//         console.log(users);
//         return users;
//     }
// };
// const postService = {};
// const commentService = {};

// export const getAll = async <T> (endpoint: string) => {
//         const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response: Response) => response.json());
//         return responseResult as T;
// }

// const all = getAll<IUser[]>('/users');

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
});

export const getAll = async <T> (endpoint: string) => {
    const axiosResponse = await axiosInstance.get<T>(endpoint);
    return axiosResponse.data;
}