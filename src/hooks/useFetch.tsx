import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue: T) => {
    const [object, setObject] = useState<T>(defaultValue);
    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setObject(value);
            });
    }, []);
    return object;
}