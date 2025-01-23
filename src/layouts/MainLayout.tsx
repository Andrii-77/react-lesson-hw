// 8). Створюємо  MainLayout.
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <>
            {/*20). Впроваджуємо Menu і йдем в LoginPage*/}
            <Menu/>
            {/*9). Створюємо  Outlet*/}
            <Outlet/>

        </>
    );
};