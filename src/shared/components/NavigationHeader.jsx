import { House, SquareCode, Network, Mail, ContactRound } from 'lucide-react';
import { ThemesContext } from '../../context/Themes.jsx';
import { use } from 'react';
import { Link } from "react-router-dom";

const NavigationHeader = () => {
    const { theme } = use(ThemesContext)

    const InforItems = [
        { icon: <House />, route: "/", name: "Home" },
        { icon: <ContactRound />, route: "/about", name: "Sobre" },
        { icon: <SquareCode />, route: "/skills", name: "Habilidades" },
        { icon: <Network />, route: "/projects", name: "Projetos" },
        { icon: <Mail />, route: "/contact", name: "Contato" }
    ]

    return (
        <nav className={`${theme.background} rounded-2xl border-2 border-purple-500/20 p-0 m-0`}>
            <ul className="flex gap-8 pt-3.5 pr-7 pb-3.5 pl-7">
                {InforItems.map(item => (
                    <li 
                        key={item.route} 
                        data-tooltip={item.name}
                        className={`relative cursor-pointer  
                                   [&>a>svg]:w-12 [&>a>svg]:h-12 ${theme.colors.icons}
                                   after:content-[attr(data-tooltip)]
                                   after:absolute 
                                   after:${theme.background} 
                                   after:text-[1.2rem]
                                   after:border-2 
                                   after:bg-purple-500/30 
                                   after:border-purple-500
                                   after:text-white
                                   after:rounded-md 
                                   after:px-4 
                                   after:py-2 
                                   after:top-17
                                   after:left-1/2
                                   after:-translate-x-1/2
                                   after:whitespace-nowrap
                                   after:opacity-0 
                                   after:pointer-events-none
                                   after:transition-all
                                   after:duration-300 
                                   hover:after:opacity-100`}
                    >
                        <Link to={item.route}>{item.icon}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationHeader