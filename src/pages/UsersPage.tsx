import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";

export const UsersPage = () => {
    return (
        <div>
            <PaginationLayout/>
            <hr/>
            <UsersComponent/>
        </div>
    );
};