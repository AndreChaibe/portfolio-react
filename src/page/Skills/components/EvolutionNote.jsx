import { use } from "react";
import { ThemesContext } from "../../../context/Themes.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


const EvolutionNote = () => {

    const { theme } = use(ThemesContext);

    return (
        <aside className={`flex flex-col items-center justify-center`}>
            <div className={`flex items-center justify-center gap-1.5 ${theme.background} px-5 border-4 border-[#9908C39E] rounded-lg max-[456px]:px-3 max-[456px]:text-[14px] max-[456px]:gap-0`}>

                <motion.div className="min-w-4 min-h-4 bg-purple-500 rounded-[50%] max-[456px]:translate-y-[-14px]"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1  }}
                    transition={{repeat: Infinity, repeatType: "reverse", repeatDelay: 0.1 , type: "spring", ease: "easeInOut", mass: 0.1}} />


                <p className="p-5 font-general font-bold text-center max-[456px]:w-[16rem]">Em constante evolução e aprendizado!</p>
            </div>
        </aside>
    )
}

export default EvolutionNote;