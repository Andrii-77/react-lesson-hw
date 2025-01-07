import {Link, Outlet} from "react-router-dom";

const BPage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'1'}>1</Link>
                </li>
                <li>
                    <Link to={'2'}>2</Link>
                </li>
                <li>
                    <Link to={'3'}>3</Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default BPage;