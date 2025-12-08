import { Button } from "../../../ui/components/index.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { SocialLinks } from "../../../shared/components";
import ShinyText from "../../../ui/animations/ShinyText.jsx";

const IntroductionArea = () => {

    return (
        <motion.div
            initial={{ translateY: -100, opacity: 0.1 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, type: "tween", ease: "easeOut" }}
            className="flex flex-col columm w-[80%] justify-center items-center gap-6.5 max-[430px]:gap-5">

            <ShinyText gradientColors="#FFFFFFCC, #c084fc, #FFFFFFCC">
                <h1 className={`text-[5rem] max-w-200 text-center leading-25 font-title
                                max-[723px]:text-[4rem] 
                                max-[723px]:leading-21
                                max-[575px]:text-[3.1rem]
                                max-[575px]:min-w-90
                                max-[575px]:leading-17
                                max-[430px]:text-[2.7rem]`}>
                    Boas-vindas ao meu portfólio!
                </h1>
            </ShinyText>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, type: "tween" }}
                className="flex justify-center items-center w-[100vw] gap-6 font-general font-bold text-white my-5 
                         [&>Button>a]:bg-[#9E0BA5] [&>Button>a]:cursor-pointer [&>Button>a]:px-5 [&>Button>a]:py-3 [&>Button>a]:rounded-2xl [&>Button>a]:text-2xl

                          max-[723px]:[&>Button>a]:text-[1.2rem]
                          max-[575px]:[&>Button>a]:text-[1rem]
                          max-[575px]:[&>Button>a]:px-5
                          max-[575px]:gap-2
                          max-[575px]:[&>Button>a]:py-2
                          max-[430px]:[&>Button>a]:text-[0.9rem]">

                <Button><a className="">Contrate-me</a></Button>
                <Button><a className="cursor-pointer" href="#sobre">Mais sobre mim</a></Button>

            </motion.div>

            <SocialLinks bgIcons="bg-black/20" />
        </motion.div>
    )
}

export default IntroductionArea;