// 16). Створюємо AuthResourcesPage.
import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    // 32). Створюємо useEffect.
    useEffect(() => {
        // 33). Створюємо ф-ію loadAuthProducts (назва довільна). Вона повинна підвантажувати продукти з
        // аутентифікованої точки. Відповідно переходим в api.service.ts, бо це має бути там. Копіюємо назву
        // loadAuthProducts.
        loadAuthProducts().then(products => {
            console.log(products)
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};