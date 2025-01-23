// 14). Створюємо LoginPage.
import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    // 21). LoginPage буде робити логінацію на неї одразу при переході без форми.
    // Буде useEffect, який буде виконувати дію логінації.
    useEffect(() => {
        // 22). В login будемо передавати дані з dymmyjson-у. Кожен юзер маю username і password.
        // І визначаємо, скільки він буде залишатись в системі (expiresInMins).
        // 23). login це сервісний рівень, тому робимо директорію services -> ape.service.ts і йду в нього.
        // 30). B LoginPage робимо імрорт login.
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            login Page
        </>
    );
};