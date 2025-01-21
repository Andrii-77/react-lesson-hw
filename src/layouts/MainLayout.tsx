import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu.tsx";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};