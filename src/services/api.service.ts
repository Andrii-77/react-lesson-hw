// 24). Тут робимо всі сервіси в одному файлі. Якщо їх багато, то треба розподіляти по інших файлах.
import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

// 27). Робим тип LoginData.
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}

// 25). Шаблон axios щоб зробити axios.create (можливо треба буде замінити урлу з шаблону).
// Робим /auth бо хочемо заходити авторизовано.
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

// 26). Створюємо метод login. Це буде стрілочна асинхронна ф-ія. Вона буде приймати обєкт LoginData, з нього
// ми будемо деструктурувати інф-ію в {username, password, expiresInMins}. LoginData буде сваритись. Робим типLoginData.
// 35). Робимо Promise<IUserWithTokens>.
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    // 28). Робим post запит на відповідний ендпоінт (аутентифакація робиться постовими запитами). Модель даних буде
    // нести <IUserWithTokens>. Урла, на яку ми повинні звертатись, має закінчуватись на /login
    // (https://dummyjson.com/auth/login). Другим параметром передаємо дані, які будемо нести: {username, password,
    // expiresInMins}. Цей запит поверне відповідь, в середині якої, будуть зберігатись юзери в вашими токенами.
    // Тому відразу це деструктуруємо {data: userWithTokens}. userWithTokens - це наша назва, для розуміння що
    // зберігається в середині.
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    // 29). Виведемо в консоль userWithTokens.
    // 30). B LoginPage робимо імрорт login.
    console.log(userWithTokens);
    // 31). Зберігаємо userWithTokens в localStorage (ячейка 'user' і стрінгіфаємо userWithTokens). І переходимо на
    // AuthResourcesPage.
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    // 36). Зробимо повернення отриманого обєкту, бо можливо захочемо його викор-вати (залежно від ситуації).
    return userWithTokens;
}

// 37). Робим завантаження масиву продуктів з аутентифікованої точки.
// 38). Зразу кажемо, шо будемо повертати проміс по айпродуктах масиву (Promise<IProduct[]>). По любому це буде async.
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // 39). Далі буде await axiosInstance, це буде get-овий запит, повертатись буде з закінчення урли /products
    // (https://dummyjson.com/auth/products - це точка доступу для аутентифікованого юзера).
    // 40). Йдем в models, щоб зробити базову модель продуктів, яких ми отримаємо (<IProductsResponseModelType>).
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products
}


export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}