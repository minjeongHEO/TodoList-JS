import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const className = isDarkMode ? "dark" : "light";
        document.body.className = className;
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(mode => !mode);
    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}
