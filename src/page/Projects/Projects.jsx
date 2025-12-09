import { useState } from "react";
import ProjectsGrid from "./components/ProjectsGrid";
import { ScrollIndicator, ShinyText } from "../../ui/animations";
import { use } from "react";
import { ThemesContext } from "../../context/Themes";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const { theme } = use(ThemesContext);

    return (
        <main className="flex flex-col items-center justify-center relative w-[50em] h-[76vh] mb-25 
                        [@media(max-height:810px)]:h-[35rem]">

            <motion.div className={`flex justify-center ${theme.background} w-[82%] mb-5 mt-9 rounded-3xl
                                     max-[690px]:w-[75%]`}
                initial={{ opacity: 0.1, left: -150 }}
                whileInView={{ opacity: 1, left: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}>

                <ShinyText gradientColors={theme.colors.titleGradient}>
                    <h1 className={`text-5xl font-title py-5`}>Projetos</h1>
                </ShinyText>

            </motion.div>


            <ProjectsGrid StateView={showAllProjects} onToggle={() => setShowAllProjects(!showAllProjects)} showAll={showAllProjects} /> 
        </main>
    );
}

export default Projects;