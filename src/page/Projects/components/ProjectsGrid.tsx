import { ButtonToggleViewProjects, ProjectCard } from "../../../shared/components/index.js";
import projectsData from "../../../data/projects.js";
import type { Project } from "../../../data/projects.js";

interface ProjectsGridProps {
    StateView: boolean;
    onToggle: () => void;
    showAll: boolean;
}

const ProjectsGrid = ({ StateView, onToggle, showAll }: ProjectsGridProps) => {
    const initialProjectsCount = 2;
    const projectsToShow: Project[] = StateView ? projectsData : projectsData.slice(0, initialProjectsCount);

    return (
        <div className="grid grid-cols-2 relative gap-x-8 gap-y-10 overflow-y-auto overflow-x-hidden scrollbar-custom h-[30rem]
                        max-[690px]:grid-cols-1 [@media(min-height:730px)]:h-[30.5rem]">
            {projectsToShow.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    projectInfor={project} 
                />
            ))}

            <ButtonToggleViewProjects onClick={onToggle}>
                {showAll ? "Ocultar projetos" : "Mais projetos"}
            </ButtonToggleViewProjects>
            
        </div>
    );
};

export default ProjectsGrid;