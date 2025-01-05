import {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null);
    useEffect(() => {

        // -----другий варіант-----
        const fetchData = async () => {
            const users = await getUsers();
            setUsers(users);

        }
        fetchData();

        // -----перший варіант-----
        // getUsers()
        //     .then(response => {
        //         setUsers(response);
        //     });

        return () => {
            console.log('done');
        }
    }, []);

    const foo = (item: IUser) => {
        setItem(item);

    }

    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;