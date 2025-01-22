import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'posts'}>Posts</Link></li>
            <li><Link to={'comments'}>Comments</Link></li>
            <li><Link to={'complex'}>Complex</Link></li>
        </ul>
    );
};