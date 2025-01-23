import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";

// 17). Впроваджуємо замість App <RouterProvider router={routes}/>
// 18). Робим директорію components і робим в ній компоненти.
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>);