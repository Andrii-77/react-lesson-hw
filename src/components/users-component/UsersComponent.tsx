import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import {useNavigate} from "react-router";

export const UsersComponent = () => {

    const navigation = useNavigate();
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            });
    }, []);
    const onButtonClickNavigate = (id: number) => {
        navigation('/users/' + id + '/carts')
    }

    return (
        <div>
            {
                users.map((user: IUser) => <div key={user.id} className={'my-2'}>
                    {user.username}: {user.email}
                    <button className={'border-2 bg-sky-200'} onClick={() => {
                        onButtonClickNavigate(user.id);
                    }}>click me</button>
                </div>)
            }
        </div>
    );
};