import { ProjectCard } from "../../../shared/components";
import projectsData from "../../../data/projects";

const ProjectsGrid = ({ StateView }) => {
    const initialProjectsCount = 2;
    const projectsToShow = StateView ? projectsData : projectsData.slice(0, initialProjectsCount);

    return (
        <div className="grid grid-cols-1 gap-8 overflow-y-auto overflow-x-hidden scrollbar-custom h-[39.8rem] md:grid-cols-2">
            {projectsToShow.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    projectInfor={project} 
                />
            ))}
        </div>
    );
};

export default ProjectsGrid;