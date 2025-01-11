import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: "1"});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getAll<IBaseResponseModel & { users: IUser[] }>('/users?skip=', currentPage)
            .then(({users}) => {
                setUsers(users);
            });
    },[searchParams]);
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
    };