import {Link} from "react-router";

export const MenuComponent = () => {
    return (

        <ul>
            <li><Link to='/users'>users</Link></li>
            <li><Link to='/posts'>posts</Link></li>
        </ul>
    );
};