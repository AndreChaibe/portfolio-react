import { useState } from "react";
import { ButtonToggleViewProjects } from "../../shared/components";
import ProjectsGrid from "./components/ProjectsGrid";
import { ShinyText } from "../../ui/animations";
import { use } from "react";
import { ThemesContext } from "../../context/Themes";

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const { theme } = use(ThemesContext);

    return (
        <main className="flex flex-col items-center justify-center w-[50em] h-[89.5vh] mb-18">

            <div className={`flex justify-center ${theme.colors.containerBg} w-[100%] m-4 rounded-3xl`}>
                <ShinyText>
                    <h1 className={`text-5xl font-title py-6`}>Projetos</h1>
                </ShinyText>
            </div>

            <ProjectsGrid StateView={showAllProjects} />

            <ButtonToggleViewProjects onClick={() => setShowAllProjects(!showAllProjects)}>
                {showAllProjects ? "Ocultar projetos" : "Mais projetos"}
            </ButtonToggleViewProjects>
        </main>
    );
}

export default Projects;