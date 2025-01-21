import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>users</Link></li>
            <li><Link to={'users/1'}>user 1</Link></li>
            <li><Link to={'posts'}>posts</Link></li>

        </ul>
    );
};