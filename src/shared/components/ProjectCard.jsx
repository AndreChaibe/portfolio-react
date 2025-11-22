import { ExternalLink, Folders } from 'lucide-react';
import { use } from 'react';
import { ThemesContext } from '../../context/Themes';

const ProjectCard = ({ isVisible = true, projectInfor }) => {
    const { theme } = use(ThemesContext);

    if (!isVisible) return null;

    return (
        <>
            <article>
                <div>
                    <div className="relative overflow-hidden rounded-2xl shadow-[1px_1px_15px_2px_rgba(105,59,127,0.74)] w-[350px]">
                        
                        <img src={projectInfor.image} alt="" className="w-full h-48 object-cover" />            
                        <div className="absolute inset-0 bg-gradient-to-t from-[#240B34] from-42%"></div>
                        
                        <div className="flex flex-col gap-3 relative pt-1 pb-5 px-6 text-white text-[15px]">
                            <h2 className="text-[1.3rem] font-bold w-100">{projectInfor.name}</h2>
                            <div className='border-2 w-[100%]' />
                            

                            <ul className="flex gap-2 mr-10 mb-2 text-[14px]
                                         [&>li]:text-[#CA95FF] [&>li]:bg-[#413152] [&>li]:px-3 [&>li]:py-[0.1rem] [&>li]:rounded-[0.4rem]">


                                          {projectInfor.technologies.map((tech, idx) => (
                                              <li key={`${projectInfor.id}-${idx}`}>{tech}</li>
                                          ))}
                            </ul>

                            <p>Passe o mouse para ver detalhes</p>
                        </div>
                    </div>


                    <div className={`flex items-center justify-center my-1  relative ${theme.colors.containerBg} border-2 border-[#6C21B3AB] translate-y-[-6px] rounded-2xl
                    [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div]:h-[100%] [&>div]:py-3 [&>div]:px-3
                    [&>div>svg]:w-3.5 [&>div>svg]:text-[#CA95FF] 
                    [&>div>span]:text-[#CA95FF]`}>

                        <div className={`${theme.colors.containerBorder} border-r-2`}>
                            <span>Demo ao vivo</span>
                            <ExternalLink />
                        </div>

                        <div className={theme.colors.containerBorder}>
                            <span>Repositório</span>
                            <Folders />
                        </div>
                    </div>

                </div>
            </article>

        </>
    )

}

export default ProjectCard;