import {useContext} from "react";
import {ThemeContext} from "../context/ContextThemeProvider.tsx";
import './A1.css'

export const A1 = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme}>
            this is A1 component and theme value is - {theme}
        </div>
    );
};