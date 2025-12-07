import { use } from "react";
import { ThemesContext } from "../../../context/Themes.jsx";
import { MessageSquareQuote } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ShinyText } from "../../../ui/animations";
import recommendationsData from "../../../data/recommendations.js";

const SectionFeedbacks = () => {

    const { theme } = use(ThemesContext)

    return (
        <section className="flex flex-col justify-center w-full pb-8">
            
            <ShinyText gradientColors="#FFFFFFCC, #c084fc, #FFFFFFCC">
                <h2 className="text-5xl font-extrabold text-center mb-10 max-[445px]:text-[2.5rem]">Recomendações</h2>
            </ShinyText>

            <ul className={`flex flex-col gap-10 text-[0.9em] px-20 

                [&>li]:flex [&>li]:flex-col [&>li]:gap-5 [&>li]:p-9 [&>li]:relative [&>li]:border-2 
                [&>li>div]:flex [&>li>div]:gap-5 [&>li]:rounded-[3%]
                [&>li>p]:border-b-3 [&>li>p]:border-b-[#7600FF54] [&>li>p]:pb-4
                [&>li>div>img]:rounded-[50%] [&>li>div>img]:w-15 [&>li>div>img]:h-15

                max-[665px]:px-8 
                max-[500px]:px-0 
                `}>

                {recommendationsData.map(recommendation => (
                    <motion.li
                        key={recommendation.id}
                        className={`${theme.background} ${theme.colors.containerBorder}`}
                        initial={{ scale: 0.5, opacity: 0.1 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                    >
                        <p className="text-justify">{recommendation.text}</p>
                        <MessageSquareQuote className={`w-30 h-18 absolute right-[1rem] bottom-7 opacity-23 ${theme.colors.icons}`} />

                        <div className="max-[360px]:text-[13px]">
                            <img src={`${recommendation.photo}`} alt={`${recommendation.altText}`} />
                            <div>
                                <p>{recommendation.name}</p>
                                <p className={`${theme.colors.highlightText}`}>{recommendation.position}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section >
    )
}

export default SectionFeedbacks;