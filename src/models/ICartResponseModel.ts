import {ICart} from "./ICart.ts";

export interface ICartResponseModel {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}