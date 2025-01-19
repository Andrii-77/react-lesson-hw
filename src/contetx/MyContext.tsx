import {createContext} from "react";

type MyContextType = {
    counterValue: number;
    increment: (obj: number) => void
};
export const init = {
    counterValue: 0,
    increment: (obj: number) => {
        console.log(obj);
    }
};
export const MyContext = createContext<MyContextType>(init);