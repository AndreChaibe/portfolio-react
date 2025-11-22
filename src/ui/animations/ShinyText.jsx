import { use } from "react";
import { ThemesContext } from "../../context/Themes.jsx";


const ShinyText = ({ children, disabled = false, speed = 2, className = '' }) => {
    const { theme } = use(ThemesContext);

    const gradientStyle = disabled 
        ? {} 
        : {
            backgroundImage: `linear-gradient(5deg, ${theme.colors.gradient})`,
            backgroundSize: '200% 100%',
            animation: `shine ${speed}s linear infinite`
        };

    return (
        <div 
            className={`${disabled ? '' : 'bg-clip-text text-transparent'} ${className}`}
            style={gradientStyle}
        >
            {children}
        </div>
    );
};

export default ShinyText;