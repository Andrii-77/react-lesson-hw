import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";
import {Outlet} from "react-router";

export const PaginationLayout = () => {
    return (
        <>
            <PaginationComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};