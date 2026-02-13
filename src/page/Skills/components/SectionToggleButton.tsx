import { useThemes } from "../../../context/Themes.js";

type TabId = 'techs' | 'tools';

interface Tab {
    id: TabId;
    label: string;
}

interface SectionToggleButtonProps {
    activeTab: TabId;
    onTabChange: (tabId: TabId) => void;
}

const SectionToggleButton = ({ activeTab, onTabChange }: SectionToggleButtonProps) => {

    const { theme } = useThemes();


    const tabs: Tab[] = [
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