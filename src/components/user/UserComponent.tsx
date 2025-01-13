import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type PropsType = {item: IUser}

export const UserComponent: FC<PropsType> = ({item}) => {
    return (
        <div>
            <div>{item.first_name} {item.last_name}</div>
            <img src={item.avatar} alt={item.first_name}/>
        </div>
    );
};