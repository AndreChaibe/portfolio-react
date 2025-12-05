import { useState } from "react";
import { ButtonToggleViewProjects } from "../../shared/components";
import ProjectsGrid from "./components/ProjectsGrid";
import { ShinyText } from "../../ui/animations";
import { use } from "react";
import { ThemesContext } from "../../context/Themes";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const { theme } = use(ThemesContext);

    return (
        <main className="flex flex-col items-center justify-center w-[50em] h-[90vh] mb-18">

            <motion.div className={`flex justify-center ${theme.background} w-[90%] m-4 rounded-3xl`}
                initial={{ opacity: 0.1, left: -150 }}
                whileInView={{ opacity: 1, left: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}>

                <ShinyText gradientColors={theme.colors.titleGradient}>
                    <h1 className={`text-5xl font-title py-6`}>Projetos</h1>
                </ShinyText>

            </motion.div>


            <ProjectsGrid StateView={showAllProjects} />

            <ButtonToggleViewProjects onClick={() => setShowAllProjects(!showAllProjects)}>
                {showAllProjects ? "Ocultar projetos" : "Mais projetos"}
            </ButtonToggleViewProjects>
        </main>
    );
}

export default Projects;