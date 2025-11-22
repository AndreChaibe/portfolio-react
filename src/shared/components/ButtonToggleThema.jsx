import { use } from 'react';
import { ThemesContext, themes } from "../../context/Themes.jsx";
import { Button } from "../../ui/components/index.jsx";
import sunIcon from "../../assets/imgs/common/line-md--sun-rising-filled-loop.svg";
import moonIcon from "../../assets/imgs/common/line-md--moon-filled-alt-loop.svg";

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


    function setThemeIcon() {
        if (theme.background == "bg-modal-white") return sunIcon
        else return moonIcon
    }

    function themeIconDescription() {
        if (theme.background == "bg-modal-white") return "Ícone de um sol roxo com raios curtos ao redor, sobre um fundo lilás claro. O design representa o dia, o modo claro ou a ideia de luminosidade e energia."

        else return "Ícone de uma lua crescente roxa com duas pequenas estrelas acima, sobre um fundo roxo escuro. O design transmite a ideia de noite, modo noturno ou descanso."
    }


    return (
        <Button>
            <img onClick={handleToggleTheme} className="w-13" src={setThemeIcon()} alt={themeIconDescription()} />
        </Button>
    );
};

export default ButtonToggleThema;