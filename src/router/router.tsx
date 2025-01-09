import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: 'users', element: <UsersPage/>,
        },
        {
            path: 'users/:id/carts', element: <CartsPage/>
        }
    ]
}])