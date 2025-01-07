import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
        ]
    }
]);