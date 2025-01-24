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
    // 55). Якщо б ми прописали всі хедери безпосередньо тут, то тоді ці хедери додавались би і в процесі логіну, і
    // в процесі отримання якихось даний з серверу а нам це НЕ ПОРІБНО.
    headers: {}
});

//  45). Беремо axiosInstance, викликаємо interceptors, він потрібний на request, кажемо, що будемо перехоплювати
//  всі запити use, які являються get-ові (post-ові не потрібні). В середині буде ф-ія (lm). Назвемо їх requestObject.
axiosInstance.interceptors.request.use((requestObject) => {
    // 46). І казати, у випадку (від requestObject-у ми будемо просити, дай нам метод, який ти викор-уєш (method),
    // переведемо його на всяк випадок в toUpperCase(), бо вони там можуть бути малими літерами, а нам потрібно
    // великими, бо вони зазвичай зазанаються великими і як стрінга. Після method ставимо ?, бо це може бути під
    // питанням, бо потенційно, якщо в requestObject нічого немає, тобто не відбувається, то і метода нема, то і від
    // метода апперкейсу нема. Тобто ми будемо казати: у випадку, якщо ми робимо по факту якийсь get-овий запит,
    // тобто на отримання інф-ії, то ми повинні з вами в наш  requestObject в розділ з headers додати хе дер, який
    // наз-ся Authorization, який буде дорівнювати 'Bearer пробіл' і плюс та інф-ія, яка знаходиться в LocalStorage.
    // Для цього робиться додатковий метод retriveLocalStorage. Його спочатку прописали тут, а пізніше перенесли у
    // файл helpers.ts в папку services. Цю ф-ію вкладають в окремий сервісний прошарок
    // (helpers.ts) типу різноманітні допоміжні ф-ії. А сюди її імпортують. Її потенційно можна використовувати не
    // тільки в цьому файлі, але і в усіх інших.
    // Тому йдемо у файл helpers.ts.
    if (requestObject.method?.toUpperCase() === 'GET') {
        // 52). Ми після + будемо викор-вати retriveLocalStorage. Будемо казати, що з LocalStorage з комірки 'user'
        // щось підтягнути, зараз буде діставатись обєкт, тому нам потрібно вказати, що нам потрібно дістати
        // accessToken. І перед дужками вказуємо типізацію <IUserWithTokens>. У випадку, якщо в майбутньому
        // знадобиться ще раз діставати з LocalStorage і типізувати, ви викликаєте ту саму ф-ію і кажете, що ви
        // хочете products дістати і вказуєтте типізацію:
        // retriveLocalStorage<IProductsResponseModelType[]>('products'). Тобто ця ф-ія тепер реюзебл.
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

// 53). На цей запит interceptor не буде діяти, бо це постовоий запит.
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

// 54). На цей запит interceptor буде діяти, бо це гетовий запит.
// 37). Робим завантаження масиву продуктів з аутентифікованої точки.
// 38). Зразу кажемо, шо будемо повертати проміс по айпродуктах масиву (Promise<IProduct[]>). По любому це буде async.
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // 39). Далі буде await axiosInstance, це буде get-овий запит, повертатись буде з закінчення урли /products
    // (https://dummyjson.com/auth/products - це точка доступу для аутентифікованого юзера).
    // 40). Йдем в models, щоб зробити базову модель продуктів, яких ми отримаємо (<IProductsResponseModelType>).
    // Нам приходить ОБЄКТ!!!
    // 41). Прописуємо типізацію і урлу (get<IProductsResponseModelType>('/products')). Це буде наш респронс, в
    // ньому, оскільки це аксіор-респонс, в ньому є комірка data, в якій все і знаходиться. Деструктуруємо data і з
    // неї беремо products (або це можна зробити в наступному рядку або ретьорні).
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    // 42). Повертаємо products. Йдемо в AuthResourcesPage.
    return products
}

// 56). Описуємо ф-ію refresh для запиту рефреш-токену. Це буде асинхронний запит.
export const refresh = async () => {
    // 58). Відповідно викликаємо retriveLocalStorage, беремо нашого юзера ('user'), типізуємо, який тип даних там
    // приходить <IUserWithTokens>. Створюємо константу iUserWithTokens.
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    // 57). Під капотом ми будемо робити await axiosInstance постовий запит на урлу '/refresh' (інфу беремо з сайту
    // dummyjson.com/docs/auth Refresh and session). Передати нам потрібно refreshToken і новий expiresInMin.
    // Передаємо їх після коми обєктом. Параметр refreshToken потрібно звідкись взяти. Беремо його з LocalStorage.
    // 61). У відповідь прилітає оновлений обєкт. Ми вже для нього зробили модель даних ITokenPair.ts. Прописуємо цю
    // модель даних після пост <ITokenPair>. Зробимо спочатку змінну axiosResponse і виведемо її через консоль.лог,
    // щоб подивитись чи там щось відбувається. У відповіді в середині будуть новий аксес і новий рефреш токени.
    // Тому ми можемо відразу їх деструктурувати: {data: {accessToken, refreshToken}}. Виведемо їх через консоль.логи.
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        // 59). З iUserWithTokens дістаємо refreshToken. Це можна впровадити і без прошаркової змінної
        // iUserWithTokens. Але ця змінна пізніше нам знадобиться, тому робимо її окремою.
        refreshToken: iUserWithTokens.refreshToken,
        // 60). Додаємо (можна це зробити відразу в пункті 57)  expiresInMin: 1.
        expiresInMin: 1
    });
    // 62). Беремо користувача, який у нас існує в LocalStorage (iUserWithTokens), звернемось до його характеристики
    // accessToken і впровадимо в неї оновлений accessToken.
    iUserWithTokens.accessToken = accessToken;
    // 63). Таке саме, що і в пункті 63 ми робимо з refreshToken.
    iUserWithTokens.refreshToken = refreshToken;
    // 64). Після цього ми в localStorage сетнемо айтем юзер з JSON.stringify(iUserWithTokens). Тобто ми дістали з
    // локал-стореджа чувачка (iUserWithTokens), отримали для нього оновлені аксес і рефреш токени. Потім чувачку
    // замінили все на те що потрібно і назад в localStorage ми його запхали, для того, щоб він там оновився. Коли
    // цю штуку зробили - переходимо на AuthResourcesPage, де ми доступаємось до продуктів.
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}