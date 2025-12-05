import { use } from 'react';
import { ThemesContext, themes } from "../../context/Themes.jsx";
import { SquareSplitHorizontal } from 'lucide-react';

function saveThemeToStorage(theme) {
    localStorage.setItem("currentTheme", JSON.stringify(theme));
}

const ButtonToggleThema = () => {
    const { theme, setTheme } = use(ThemesContext);

    const handleToggleTheme = () => {
        const newTheme = theme.background === themes.white.background ? themes.black : themes.white;

        setTheme(newTheme);
        saveThemeToStorage(newTheme);
    };

    // function themeIconDescription() {
    //     if (theme.background == "bg-modal-white") return "Ícone de um sol roxo com raios curtos ao redor, sobre um fundo lilás claro. O design representa o dia, o modo claro ou a ideia de luminosidade e energia."

    //     else return "Ícone de uma lua crescente roxa com duas pequenas estrelas acima, sobre um fundo roxo escuro. O design transmite a ideia de noite, modo noturno ou descanso."
    // }


    return (
        <button onClick={handleToggleTheme}>
            <SquareSplitHorizontal className={`${theme.background} w-17 h-17 ${theme.colors.icons} cursor-pointer bg-black/25 rounded-[50%] p-2.5 border-4 border-[#734892] transition-transform duration-500 ease-in-out hover:scale-105 active:scale-95 ${theme.background ? '-scale-x-100' : 'scale-x-100'}`} />
        </button>
    );
};

export default ButtonToggleThema;