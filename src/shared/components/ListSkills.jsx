// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ListSkills = ({ children }) => {
    return (
        <motion.ul className="flex justify-center gap-5 [&>li]:w-16
                              max-[505px]:flex-wrap max-[505px]:px-30
                              max-[630px]:[&>li]:w-14">
            {children}
        </motion.ul>
    )
}

export default ListSkills;