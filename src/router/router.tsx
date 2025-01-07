import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";


export const routes = createBrowserRouter([
    {
        path: "/",element: <MainLayout/>
    }
]);