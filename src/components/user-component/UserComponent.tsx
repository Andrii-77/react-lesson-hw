import {useNavigate} from "react-router";
import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type Props = {
    user: IUser;
}
export const UserComponent: FC<Props> = ({user}) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return <div className={"my-2"}>
        {user.username}: {user.email} {}
        <button className={"border-2 bg-sky-200"} onClick={onButtonClickNavigate}>click me</button>
    </div>;
}