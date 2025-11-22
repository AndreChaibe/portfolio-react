/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from 'react';

function loadThemeFromStorage() {
    const savedThemeJSON = localStorage.getItem("currentTheme");

    if (savedThemeJSON) return JSON.parse(savedThemeJSON);
    return themes.black; 
}

const themes = {
    white: {
        background: "bg-modal-white",

        colors: {
            text: "text-black",
            highlightText: "text-purple-700",
            navBg: "bg-[#f6e5ff]",
            icons: "text-dark-purple",
            title: "text-[#990BE1]",
            gradient: "#C60DD6, #BC6ED9, #C60DD6",
            buttonBg: "bg-[#7108A8]",
            containerBg: "bg-[#F6F4F8E3]",
            containerBorder: "border-[#E700FF]",
        }
    },

    black: {
        background: "bg-modal-black",

        colors: {
            text: "text-white",
            highlightText: "text-purple-300",
            navBg: "bg-[#26162f]",
            icons: "text-royal-purple",
            title: "text-light-purple",
            gradient: "#FFFFFFCC,  #c084fc,#FFFFFFCC",
            buttonBg: "bg-[#9E0BA5]",
            containerBg: "bg-dark-alpha",
            containerBorder: "border-purple-500",
        }
    }
};

const ThemesContext = createContext()

const ThemesProvider = ({ children }) => {
    const [theme, setTheme] = useState(loadThemeFromStorage);

    return (
        <ThemesContext value={{ theme, setTheme }}>
            {children}
        </ThemesContext>
    );
};

export { themes, ThemesContext, ThemesProvider }