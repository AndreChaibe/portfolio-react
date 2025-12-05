import { Button } from "../../../ui/components/index.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ShinyText from "../../../ui/animations/ShinyText.jsx";
import { SocialLinks } from "../../../shared/components";

const IntroductionArea = () => {

    return (
        <motion.div
            initial={{ translateY: -100, opacity: 0.1 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, type: "tween", ease: "easeOut" }}
            className="flex flex-col columm w-[80%] justify-center items-center gap-6.5
            ">

            <ShinyText gradientColors="#FFFFFFCC, #c084fc, #FFFFFFCC">
                <h1 className={`text-[5rem] max-w-200 text-center leading-25 font-title`}>
                    Boas-vindas ao meu portfólio!
                </h1>
            </ShinyText>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, type: "tween" }}
                className="flex justify-center items-center w-[100%] gap-6 font-general font-bold text-white my-5
              [&>Button>a]:bg-[#9E0BA5] [&>Button>a]:cursor-pointer [&>Button>a]:px-5 [&>Button>a]:py-3 [&>Button>a]:rounded-2xl [&>Button>a]:text-2xl">

                <Button><a className="">Contrate-me</a></Button>
                <Button><a className="cursor-pointer" href="#sobre">Mais sobre mim</a></Button>

            </motion.div>

            <SocialLinks bgIcons="bg-black/20" />
        </motion.div>
    )
}

export default IntroductionArea;