import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = 'https://dummyjson.com';
export const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json());
    }
    // asd:() => {
    //   коли сервіси будуть розростатись, тут будуть зявлятись додаткові ф-ії
    // }
};
export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponseModel> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(res => res.json());
    }
    // asd:() => {
    //   коли сервіси будуть розростатись, тут будуть зявлятись додаткові ф-ії
    // }
};