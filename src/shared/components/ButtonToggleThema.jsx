import { use } from 'react';
import { ThemesContext, themes } from "../../context/Themes.jsx";
import { SquareSplitHorizontal } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

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

    return (
        <motion.button
            onClick={handleToggleTheme}
            whileHover={{
                scale: 1.05,
                rotateY: 180  
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`cursor-pointer rounded-full p-2.5 flex items-center justify-center
            `}
        >
            <SquareSplitHorizontal className={`${theme.background} w-17 h-17 ${theme.colors.icons} cursor-pointer bg-black/25 rounded-[50%] p-2.5 border-4 border-[#734892] max-[470px]:w-15 max-[470px]:h-15`} />
        </motion.button>
    );
};




export default ButtonToggleThema;