import { House, UserRound, SquareCode, Network, Mail, ContactRound } from 'lucide-react';
import { ThemesContext } from '../../context/Themes.jsx';
import { use } from 'react';
import { Link } from "react-router-dom";


const NavigationHeader = () => {

    const { theme } = use(ThemesContext)

    return (
        <nav className={`${theme.colors.navBg} rounded-2xl border-2 border-purple-500/20 p-0 m-0`}>
            <ul className="flex gap-8 pt-3.5 pr-7 pb-3.5 pl-7">
                <li className='cursor-pointer'>
                     <Link to="/"><House className={`w-10 h-10 ${theme.colors.icons}`} /></Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to="/about"><UserRound className={`w-10 h-10 ${theme.colors.icons}`} /></Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to="/skills"><SquareCode className={`w-10 h-10 ${theme.colors.icons}`} /></Link>
                </li>

                <li className='cursor-pointer'>
                    <Link to="/projects"><Network className={`w-10 h-10 ${theme.colors.icons}`} /></Link>
                </li>

                <li className='cursor-pointer'>
                    <a href="#contact"><Mail className={`w-10 h-10 ${theme.colors.icons}`} /></a>
                </li>

            </ul>
        </nav>
    )
}

export default NavigationHeader