// 3). Створюємо модель даних  для відповіді від сервіра після рефрешу.
export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
}