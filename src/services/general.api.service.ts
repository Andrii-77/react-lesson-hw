// import {IPost} from "../models/IPost.ts";
// import {IUser} from "../models/IUser.ts";

// import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
// import {IPost} from "../models/IPost.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAll = async <T, >(endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`).then(res => res.json());

}


// const all = getAll<IPost[]>('/posts');
// const all1 = getAll<IUser[]>('/users');
//
// це приклад того як ви можете одну ф-ію getAll використовувати для того, щоб вона працювала зі всім.
// це працює для схожих сервісів.
// коли сервіси починають розростатись і перестають бути схожими між собою - їх потрібно роз'єднювати!!!


// getAll<IBaseResponseModel & {posts:IPost[]}>('/posts');
// коли існує багато місць використання сукупної моделі даних в <> то має сенс її виносити
// в окремий сегмент моделі. Якщо це одне місце, то можна це визначити локально.
// Це як потрібно чи не потрібно робити проміжні ланки.
// Тут не потрібно це робити, бо будемо викор-вати  IBaseResponseModel, а {posts:IPost[]} в
// одному місці.