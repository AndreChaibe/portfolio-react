// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ButtonToggleViewProjects = ({ children, onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            className="translate-x-[72%] cursor-pointer rounded-[5%] mx-11 py-3 bg-purple-800 text-white
                       max-[690px]:translate-x-[0%]
                       max-[690px]:mx-10

                       [@media(max-height:630px)]:mb-[19%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5, delay: 0.1 }}
        >
            {children}
        </motion.button>
    );
}

export default ButtonToggleViewProjects;