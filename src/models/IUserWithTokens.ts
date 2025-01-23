// 2). Створюємо модель даних для відповіді з токеном від сервіра після логінації.
export interface IUserWithTokens {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}