import { useThemes } from "../../../context/Themes.js";
import { MessageSquareQuote } from 'lucide-react';
import { motion } from "motion/react";
import { ShinyText } from "../../../ui/animations/index.jsx";
import recommendationsData from "../../../data/recommendations.js";

interface Recommendation {
    id: string | number;
    text: string;
    photo: string;
    altText: string;
    name: string;
    position: string;
}

const SectionFeedbacks = () => {

    const { theme } =useThemes();

    return (
        <section className="flex flex-col justify-center w-full pb-8 max-[690px]:w-[85%] max-[530px]:w-[78%] max-[450px]:w-[70%] max-[410px]:w-[60%]">
            
            <ShinyText gradientColors="#FFFFFFCC, #c084fc, #FFFFFFCC">
                <h2 className="text-5xl font-extrabold text-center mb-10 max-[445px]:text-[2.5rem]">Recomendações</h2>
            </ShinyText>

            <ul className={`flex flex-col gap-10 text-[0.9em] px-20 

                [&>li]:flex [&>li]:flex-col [&>li]:gap-5 [&>li]:p-9 [&>li]:relative [&>li]:border-2 
                [&>li>div]:flex [&>li>div]:gap-5 [&>li]:rounded-[3%]
                [&>li>p]:border-b-3 [&>li>p]:border-b-[#7600FF54] [&>li>p]:pb-4
                [&>li>div>img]:rounded-[50%] [&>li>div>img]:w-15 [&>li>div>img]:h-15
                `}>

                {(recommendationsData as Recommendation[]).map((recommendation: Recommendation) => (
                    <motion.li
                        key={recommendation.id}
                        className={`${theme.background} ${theme.colors.containerBorder}`}
                        initial={{ scale: 0.5, opacity: 0.1 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                    >
                        <p className="text-justify">{recommendation.text}</p>
                        <MessageSquareQuote className={`w-30 h-18 absolute right-[1rem] bottom-7 opacity-25 ${theme.colors.icons} max-[770px]:right-0 max-[770px]:w-20 max-[770px]:h-15 max-[770px]:bottom-10 max-[395px]:bottom-2 max-[395px]:h-12`} />

                        <div className="max-[360px]:text-[13px]">
                            <img src={recommendation.photo} alt={recommendation.altText} />
                            <div>
                                <p>{recommendation.name}</p>
                                <p className={`${theme.colors.highlightText}`}>{recommendation.position}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default SectionFeedbacks;