import {createContext} from "react";

type ContextValueType = {
    theme: string,
    changeTheme: (theme: string) => void
}

const defaultValue: ContextValueType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme);
        // обєкт-заглушка, щоб не світило помилки.
    }
};
export const ThemeContext = createContext<ContextValueType>(defaultValue);