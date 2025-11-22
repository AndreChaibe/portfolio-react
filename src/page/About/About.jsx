import { use } from "react";
import { ThemesContext } from "../../context/Themes.jsx";
import ProfileCard from "./components/ProfileCard";
import SectionFeedbacks from "./components/SectionRecommendations";

const About = () => {
    const { theme } = use(ThemesContext);

    return (
        <main className={`flex flex-col items-center mb-12 w-[50em] gap-17 overflow-y-auto overflow-x-hidden scrollbar-custom h-[39.8rem] ${theme.colors.text}`}>
            <ProfileCard />
            <SectionFeedbacks />
        </main>
    )
}

export default About;