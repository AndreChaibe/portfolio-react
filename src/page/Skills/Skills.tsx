import { useEffect, useState } from "react";
import { useThemes } from "../../context/Themes.js";
import { ShinyText } from "../../ui/animations/index.jsx";
import ListTech from "./components/ListTech.js";
import ListTools from "./components/ListTools.js";

import { motion } from "motion/react";
import { SectionSkills } from "../../shared/components/index.js";
import EvolutionNote from "./components/EvolutionNote.js";
import SectionToggleButton from "./components/SectionToggleButton.js";

type TabId = 'techs' | 'tools';

const Skills = () => {
    const { theme } = useThemes();
    const [activeTab, setActiveTab] = useState<TabId>(() => {
        const saved = localStorage.getItem('activeTab');
        return (saved as TabId) || 'techs';
    });

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    return (
        <main className="flex flex-col justify-center items-center w-[50em] overflow-y-auto overflow-x-hidden scrollbar-custom
                         [@media(max-height:580px)]:h-[17rem] 
                         max-[505px]:fixed
                         max-[505px]:top-35
                         [@media(max-height:708px)]:justify-normal
                         [@media(min-height:910px)]:translate-y-[-2rem]">
            <div className={`flex flex-col items-center justify-center w-150 ${theme.background} border-4 border-[#9908C39E] rounded-lg 
                              max-[505px]:w-[30rem] [@media(min-height:910px)]:h-[25rem]`}>
                <ShinyText gradientColors={theme.colors.titleGradient}>
                    <h1 className="text-5xl w-[100%] font-title text-center px-9 py-6 [@media(min-height:910px)]:py-10">Habilidades</h1>
                </ShinyText>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-1 bg-[#9908C39E]"
                />

                <div className="flex gap-5 text-white py-5">
                    <SectionToggleButton
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </div>

                <SectionSkills>
                    {activeTab === 'techs' ? <ListTech /> : <ListTools />}
                </SectionSkills>
            </div>

            <EvolutionNote />
        </main>
    );
};

export default Skills;