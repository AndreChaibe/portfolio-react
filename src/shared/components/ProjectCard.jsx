import { ExternalLink, Folders } from 'lucide-react';
import { use } from 'react';
import { ThemesContext } from '../../context/Themes';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const ProjectCard = ({ isVisible = true, projectInfor }) => {
    const { theme } = use(ThemesContext);

    if (!isVisible) return null;
    return (
        <article>
            <motion.div
                className='flex flex-col justify-center
                        max-[362px]:items-center'
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            >
                <div className="group relative overflow-hidden rounded-2xl shadow-[1px_1px_15px_2px_rgba(105,59,127,0.74)]  transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer
                max-[362px]:w-[290px]">

                    <img src={projectInfor.image} alt="" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />

                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to top, ${theme.colors.cardGradient} ${theme.colors.cadGradientExpansion}, transparent)`
                    }} />

                    <div className={`flex flex-col gap-3 relative pt-1 pb-5 px-4 text-[15px] font-bold transition-opacity duration-300 group-hover:opacity-0`}>

                        <motion.h2 className="text-[1.1rem] font-extrabold text-white w-[18.7rem] py-[0.2rem] z-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.9, delay: 1.4 }} >
                            {projectInfor.name}
                        </motion.h2>

                        <motion.div className="absolute w-76 h-8 bg-[#632260D4] translate-x-[-1rem]" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)' }}
                            initial={{ translateX: -301 }}
                            whileInView={{ translateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.9, delay: 0.6 }} />

                        <motion.div className='border-1 w-[100%] translate-x-[-1rem]'
                            initial={{ translateX: 313 }}
                            whileInView={{ translateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.9, delay: 0.6 }} />

                        <ul className="flex gap-2 mr-10 mb-2 text-[14px]
                                     [&>li]:text-[#CA95FF] [&>li]:px-2 [&>li]:border-1 [&>li]:py-[0.1rem] [&>li]:rounded-[0.4rem]">
                            {projectInfor.technologies.map(tech => (
                                <motion.li className={theme.colors.techCardBg} key={`${projectInfor.id}-${tech}`}
                                    initial={{ opacity: 0, translateY: 10 }}
                                    whileInView={{ opacity: 1, translateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "tween", ease: "easeOut", duration: 0.9, delay: 1.9 }}>
                                    {tech}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.p initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.9, delay: 2.2 }}>
                            Passe o cursor para ver detalhes
                        </motion.p>
                    </div>

                    <div className={`absolute inset-0 ${theme.colors.cardBgHover} backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <div className={`${theme.colors.text} text-center`}>
                            <h3 className="text-xl font-bold mb-3 text-[#CA95FF]">{projectInfor.name}</h3>
                            <p className="text-[15px] leading-relaxed">{projectInfor.description}</p>
                        </div>
                    </div>
                </div>

                <div className={`flex items-center justify-center my-1 relative text-white bg-[#942d9d] border-2 border-[#6C21B3AB] translate-y-[-6px] rounded-2xl text-[14px]
                                 [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div]:h-[100%] [&>div]:py-2.5 
                                 [&>div>svg]:w-[17px] [&>div>a]:font-bold [&>div>a]:cursor-pointer

                                 max-[362px]:[&>div]:px-4
                                 max-[362px]:[&>div>a]:text-[13px]`}>

                    <motion.div className="border-r-2 border-[#ffffffab] pr-5">
                        <a href={projectInfor.liveUrl} target='_black'>Demo ao vivo</a>
                        <ExternalLink strokeWidth={3} />
                    </motion.div>

                    <div className='pl-5'>
                        <a href={projectInfor.repoUrl} target='_black'>Repositório</a>
                        <Folders strokeWidth={3} />
                    </div>
                </div>
            </motion.div>
        </article>
    )
}

export default ProjectCard;