
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ListSkills } from "../../../shared/components";

import gitLogo from "../../../assets/imgs/skills/Git-logo.svg";
import gitHubLogo from "../../../assets/imgs/skills/Github-logo.svg";
import npmLogo from "../../../assets/imgs/skills/Npm-logo.svg";
import viteLogo from "../../../assets/imgs/skills/Vite-logo.svg";
import vsCodeLogo from "../../../assets/imgs/skills/VsCode-logo.svg";
import figmaLogo from "../../../assets/imgs/skills/Figma-logo.svg";

const imgsSkillsTools = {
    gitLogo,
    gitHubLogo,
    npmLogo,
    viteLogo,
    vsCodeLogo,
    figmaLogo,
};

const ListTools = () => {
    return (
        <ListSkills>
            <motion.li
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTools.figmaLogo} alt="logo figma" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTools.gitLogo} alt="logo Git" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTools.gitHubLogo} alt="logo GitHub" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTools.npmLogo} alt="logo Npm" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTools.viteLogo} alt="logo Vite" />
            </motion.li>

            <motion.li
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, type: "spring", ease: "easeIn" }}
            >
                <img src={imgsSkillsTools.vsCodeLogo} alt="logo Vs Code" />
            </motion.li>
        </ListSkills>
    )
}

export default ListTools;