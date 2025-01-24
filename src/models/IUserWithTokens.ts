//    1). Завантажуємо три бібліотеки (знизу) в package.json в "dependencies". Пишу тут, бо там не закоментовується
//    і при виводі вибиває помилку.
//     "axios": "^1.7.9",
//     "react-router-dom": "^7.1.2",
//     "react-hook-form": "^7.54.2"
// 2). Створюємо модель даних для відповіді з токеном від сервіра після логінації. Далі створюємо модель ITokenPair.ts
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