import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";



export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then(value => value.json())
    }
}

export const postServices = {
    getAllPostsOfUserById: async (id: number):Promise<IPost[]> => {
        return await fetch(urls.posts.usersPostsById(id))
            .then(value => value.json())
    }
}