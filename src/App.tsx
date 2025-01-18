import './App.css'
import {B} from "./components/B.tsx";
import {A} from "./components/A.tsx";
import {ThemeContext} from "./context/ContextThemeProvider.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');

    return (
        <div>

            <ThemeContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => {
                    setThemeColor(themeValue);
                }
            }}>
                <A/>
                <B/>
            </ThemeContext.Provider>

        </div>
    )
}

export default App
