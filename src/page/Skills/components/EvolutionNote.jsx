import { use } from "react";
import { ThemesContext } from "../../../context/Themes.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


const EvolutionNote = () => {

    const { theme } = use(ThemesContext);

    return (
        <aside className={`flex flex-col items-center justify-center mb-10`}>
            <div className={`flex items-center justify-centergap-1.5 ${theme.colors.containerBg} px-5 border-4 border-[#9908C39E] rounded-lg`}>

                <motion.div className="w-4 h-4 bg-purple-500 rounded-[50%]"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1  }}
                    transition={{repeat: Infinity, repeatType: "reverse", repeatDelay: 0.1 , type: "spring", ease: "easeInOut", mass: 0.1}} />


                <p className={`${theme.colors.text} p-5 font-general font-bold`}>Em constante evolução e aprendizado!</p>
            </div>
        </aside>
    )
}

export default EvolutionNote;