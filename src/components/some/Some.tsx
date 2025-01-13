import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

export const Some = () => {

    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        // create request to API with searchParam
        fetch('https://reqres.in/api/users?page=' + pg)
            .then(value => value.json())
            .then(value => {
                console.log(value);
            });
    }, [query]);

    return (
        <div>
            Some content
        </div>
    );
};