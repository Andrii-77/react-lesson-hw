import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.ts";
import {UserComponent} from "../user/UserComponent.tsx";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {
        // create request to API with searchParam
        getAllUsers(query.get('pg') || '1')
            .then(value => setUsers(value.data));
    }, [query]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};