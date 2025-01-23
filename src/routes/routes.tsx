// 5) Формуємо папку routes, файл routes.tsx.
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

// 6). createBrowserRouter() він повертає обєкт routes.tsx, в середині робимо масив зі шляхами.
// 7). Створюємо директорію layouts далі в ній створюємо MainLayout.tsx
export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            // 10). Створюємо директорію pages, далі до неї.
            // 11). Створюємо children HomePage.
            {index: true, element: <HomePage/>},
            // 13). Створюємо роут LoginPage.
            {path: 'login', element: <LoginPage/>},
            // 15). Створюємо роут для аутентфікованих ресурсів.
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);