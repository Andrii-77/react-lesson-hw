// 5) Формуємо папку routes, файл routes.tsx.
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

// 6). createBrowserRouter() він повертає обєкт routes.tsx, в середині робимо масив зі шляхами.
// 7). Створюємо директорію layouts далі в ній створюємо MainLayout.tsx. Далі створюємо  MainLayout.
export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            // 10). Створюємо директорію pages, далі до неї.
            // 11). Створюємо children HomePage. Далі створюємо HomePage.tsx.
            {index: true, element: <HomePage/>},
            // 13). Створюємо роут LoginPage. Далі створюємо LoginPage.
            {path: 'login', element: <LoginPage/>},
            // 15). Створюємо роут для аутентфікованих ресурсів. Далі створюємо AuthResourcesPage.
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);