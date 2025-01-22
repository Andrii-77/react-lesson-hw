import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <>
            <div>
                <p>Users:</p>
                {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
            </div>
        </>
    );
};