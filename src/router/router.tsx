import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {CreateCarsPage} from "../pages/CreateCarsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarsPage/>}
        ]
    }
])