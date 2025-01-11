import {useSearchParams} from "react-router";


export const PaginationComponent = () => {
    const [searchParams, setSearcParams] = useSearchParams({page: "1"});
    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <div>
            <button className="border-solid border-2 border-black bg-sky-200" onClick={() => {
                if(currentPage > 1) {
                setSearcParams({page: (--currentPage).toString()});
                }
            }}>prev</button>
            <button className="border-solid border-2 border-black bg-green-400" onClick={() => {
                setSearcParams({page: (++currentPage).toString()});
            }}>next</button>
        </div>
    );
};