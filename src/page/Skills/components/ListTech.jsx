
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { ListSkills } from "../../../shared/components";

import htmlLogo from "../../../assets/imgs/skills/HTML-logo.svg";
import cssLogo from "../../../assets/imgs/skills/CSS-logo.svg";
import jsLogo from "../../../assets/imgs/skills/JavaScript-logo.svg";
import tsLogo from "../../../assets/imgs/skills/TypeScript-logo.svg";
import tailwindCssLogo from "../../../assets/imgs/skills/TailwindCSS-logo.svg";
import reactLogo from "../../../assets/imgs/skills/React-logo.svg";

const imgsSkillsTech = {
    htmlLogo,
    cssLogo,
    jsLogo,
    tsLogo,
    tailwindCssLogo,
    reactLogo,
};

const ListTech = () => {
    return (
        <ListSkills>
            <motion.li
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTech.htmlLogo} alt="logo HTML" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTech.cssLogo} alt="logo CSS" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTech.jsLogo} alt="logo JavaScript" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTech.tsLogo} alt="logo TypeScript" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTech.tailwindCssLogo} alt="logo TailwindCSS" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn"}}
            >
                <img src={imgsSkillsTech.reactLogo} alt="logo React" />
            </motion.li>
        </ListSkills>
    )
}

export default ListTech;