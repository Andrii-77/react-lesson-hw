import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[] }>('/users')
            .then(({users}) => setUsers(users));
    }, []);
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};