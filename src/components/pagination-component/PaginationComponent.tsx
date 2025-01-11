import {useSearchParams} from "react-router";

export const PaginationComponent = () => {
    const [searchParams, setSearcParams] = useSearchParams({page: "1"});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div>
            <button onClick={() => {
                if(currentPage > 1) {
                setSearcParams({page: (--currentPage).toString()});
                }
            }}>prev</button>
            <button onClick={() => {
                setSearcParams({page: (++currentPage).toString()});
            }}>next</button>
        </div>
    );
};