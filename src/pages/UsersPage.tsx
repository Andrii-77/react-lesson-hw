import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSilce.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

export const UsersPage = () => {
    const {users,loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <div>
            {!loadState && <div>Loading</div>}

            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }


        </div>
    );
};