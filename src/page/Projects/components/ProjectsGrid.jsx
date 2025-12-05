import { ProjectCard } from "../../../shared/components";
import projectsData from "../../../data/projects";

const ProjectsGrid = ({ StateView }) => {
    const initialProjectsCount = 2;
    const projectsToShow = StateView ? projectsData : projectsData.slice(0, initialProjectsCount);

    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 overflow-y-auto overflow-x-hidden scrollbar-custom md:grid-cols-2 h-[30rem]">
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