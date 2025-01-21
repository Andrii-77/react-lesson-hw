import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSilce.ts";

export const UserPage = () => {
    const {id} = useParams();

    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(userSliceActions.loadUser(id));

    }, [id]);

    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};