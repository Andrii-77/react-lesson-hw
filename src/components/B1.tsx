import {useContext} from "react";
import {ThemeContext} from "../context/ContextThemeProvider.tsx";

export const B1 = () => {
    const {changeTheme} = useContext(ThemeContext)
    const handlerDark = () => {
        changeTheme('dark');
    };
    const handlerLight = () => {
        changeTheme('light');
    };
    return (
        <div>
            <button onClick={handlerDark}>Change Theme to DARK</button>
            <button onClick={handlerLight}>Change Theme to LIGHT</button>
        </div>
    );
};