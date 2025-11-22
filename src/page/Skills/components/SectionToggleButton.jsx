import { use } from "react";
import { ThemesContext } from "../../../context/Themes.jsx";

const SectionToggleButton = ({ activeTab, onTabChange }) => {
    const { theme } = use(ThemesContext);

    const tabs = [
        { id: 'techs', label: 'Tecnologias' },
        { id: 'tools', label: 'Ferramentas' }
    ];

    return (
        <div className={`flex gap-5 ${theme.colors.text} py-1`}>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
                        cursor-pointer font-general border-2 px-4 py-2 rounded-md 
                        transition-colors
                        ${activeTab === tab.id ? 'bg-purple-500' : ''}
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default SectionToggleButton;