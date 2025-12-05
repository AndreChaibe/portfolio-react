import { ThemesContext } from "../../../context/Themes";
import { use } from "react";

const SectionToggleButton = ({ activeTab, onTabChange }) => {

    const { theme } = use(ThemesContext);

    const tabs = [
        { id: 'techs', label: 'Tecnologias' },      
        { id: 'tools', label: 'Ferramentas' }
    ];

    return (
        <div className={`flex gap-5 py-1 ${theme.colors.text}`}>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
                        cursor-pointer font-general border-2 px-4 py-2 rounded-md 
                        transition-colors
                        ${activeTab === tab.id ? 'bg-purple-500 text-white' : ''}
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default SectionToggleButton;