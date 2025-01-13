import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg: '1'});

    return (
        <div>
            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    setQuery({pg:(--currentPage).toString()})
                }
            }}>prev</button>
            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    setQuery({pg:(++currentPage).toString()})
                }
            }}>next</button>
        </div>
    );
};
