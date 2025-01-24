// 3). Створюємо модель даних  для відповіді від сервіра після рефрешу. Далі створюємо модель IProduct.ts.
export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
}