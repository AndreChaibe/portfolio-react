import { ShinyText } from "../../ui/animations";
import { ThemesContext } from "../../context/Themes.jsx";
import { use, useState, useEffect } from "react";
import ListTech from "./components/ListTech.jsx";
import ListTools from "./components/ListTools.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import SectionToggleButton from "./components/SectionToggleButton"
import { SectionSkills } from "../../shared/components";
import EvolutionNote from "./components/EvolutionNote.jsx";

const Skills = () => {
    const { theme } = use(ThemesContext);
    const [activeTab, setActiveTab] = useState(() => {
        const saved = localStorage.getItem('activeTab');
        return saved || 'techs';
    });

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    return (
        <main className="flex flex-col justify-center items-center w-[50em]">
            <div className={`flex flex-col items-center justify-center w-150 ${theme.background} border-4 border-[#9908C39E] rounded-lg mb-6`}>
                <ShinyText gradientColors={theme.colors.titleGradient}>
                    <h1 className="text-5xl w-[100%] font-title text-center px-9 py-6">Habilidades</h1>
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