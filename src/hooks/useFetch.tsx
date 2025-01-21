import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue: T) => {
    const [data, setData] = useState<T>(defaultValue);
    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setData(value);
            });
    }, []);
    return data;
}