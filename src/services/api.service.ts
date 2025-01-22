import {baseUrl} from "../constants/urls.ts";

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

export const getAll = async <T> (endpoint: string) => {
        const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response: Response) => response.json());
        return responseResult as T;
}

// const all = getAll<IUser[]>('/users');