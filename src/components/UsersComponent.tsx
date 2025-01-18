import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";


export const UsersComponent = () => {
    console.log('users');
    const users = useFetch();

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);


    const foo = useCallback(() => {
        console.log('test');
    }, []);


    return (
        <div>users component
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }


        </div>
    );
};