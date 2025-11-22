// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ListSkills = ({ children }) => {
    return (
        <motion.ul className="flex gap-5
        [&>li]:w-16"
        >
            {children}
        </motion.ul>
    )
}

export default ListSkills;