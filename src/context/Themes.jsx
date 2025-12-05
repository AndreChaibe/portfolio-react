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
            icons: "text-[#8128CB]",
            iconsBg: "bg-[#F6F4F8DE]",
            title: "text-[#990BE1]",
            titleGradient: "#935AAF, #702893, #935AAF",
            buttonBg: "bg-[#7108A8]",
            containerBg: "bg-[#F6F4F8D9]",
            containerBorder: "border-[#E700FF]",
            cardGradient: "#fff",
            cadGradientExpansion: "30%",
            techCardBg: "bg-white",
            cardBgHover: "bg-[#F6F6F6]"
            
        }
    },

    black: {
        background: "bg-modal-black",

        colors: {
            text: "text-white",
            highlightText: "text-purple-300",
            navBg: "bg-[#26162f]",
            icons: "text-[#a021c8]",
            iconsBg: "bg-black/20",
            title: "text-[#c084fc]",
            titleGradient: "#E4C4F4, #965CB1, #E4C4F4",
            buttonBg: "bg-[#9E0BA5]",
            containerBg: "bg-[#151313BF]",
            containerBorder: "border-purple-500",
            cardGradient: "#240B34",
            cadGradientExpansion: "42%",
            techCardBg: "bg-[#413152]",
            cardBgHover: "bg-[#121212B0]"
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