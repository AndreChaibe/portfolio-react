// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { SocialLinks } from "../../../shared/components";
import ShinyText from "../../../ui/animations/ShinyText.jsx";
import { Link } from "react-router-dom";

const IntroductionArea = () => {

    return (
        <motion.div
            initial={{ translateY: -100, opacity: 0.1 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, type: "tween", ease: "easeOut" }}
            className="flex flex-col columm w-[80%] justify-center items-center gap-5 max-[430px]:gap-5 mb-10 max-[690px]:mb-0">

            <ShinyText gradientColors="#FFFFFFCC, #c084fc, #FFFFFFCC">
                <h1 className={`text-[4rem] max-w-200 text-center leading-22 font-title
                                max-[723px]:text-[4rem] 
                                max-[723px]:leading-21
                                max-[575px]:text-[3.1rem]
                                max-[575px]:min-w-90
                                max-[575px]:leading-17
                                max-[430px]:text-[2.7rem]`}>
                    Boas-vindas ao meu portfólio!
                </h1>
            </ShinyText>

            <div className="font-title text-purple-300 text-center text-[2.2rem]
            max-[575px]:text-[2rem] max-[485px]:text-[1.8rem]">
                <h2>Sou André Chaibe</h2>
                <p>Desenvolvedor Front-end</p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, type: "tween" }}
                className="flex justify-center items-center w-[100vw] gap-6 font-general font-bold text-white my-5 [&>button>a]:hover:shadow-[1px_1px_15px_7px_rgba(105,59,127,0.9)] [&>button>a]:transition-all  [&>button>a]:duration-1000
                         [&>button>a]:bg-[#9E0BA5]  [&>button>a]:cursor-pointer [&>button>a]:px-5 [&>button>a]:py-3 [&>button>a]:rounded-2xl [&>button>a]:text-2xl 

                          max-[723px]:[&>button>a]:text-[1.2rem]
                          max-[575px]:[&>button>a]:text-[1rem]
                          max-[575px]:[&>button>a]:px-5
                          max-[575px]:gap-2
                          max-[575px]:[&>button>a]:py-2
                          max-[430px]:[&>button>a]:text-[0.9rem]">

                <button><Link to="/contact">contate-me</Link></button>
                <button><Link to="/about">Mais sobre mim</Link></button>

            </motion.div>

            <SocialLinks bgIcons="bg-black/20" />
        </motion.div>
    )
}

export default IntroductionArea;