import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: '', element: <HomePage/>},
            //  /a
            {path: 'a', element: <APage/>},
            {
                path: 'b', element: <BPage/>, children: [
                    // /b/1
                    {path: '1', element: <div>content 1</div>},
                    // /b/2
                    {path: '2', element: <div>content 2</div>},
                    // /b/3
                    {path: '3', element: <div>content 3</div>},
                ]
            },
        ]
    },

]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>);
