import { createContext, useEffect, useState } from 'react';

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
};
export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(initTheme());

    useEffect(() => {
        const darkModeType = isDarkMode ? 'dark' : 'light';

        localStorage.setItem('theme', darkModeType);
        document.body.className = darkModeType;
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode((mode) => !mode);
    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}
