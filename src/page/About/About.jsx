import ProfileCard from "./components/ProfileCard";
import SectionFeedbacks from "./components/SectionRecommendations";

const About = () => {

    return (
        <main className="flex flex-col items-center mb-12 w-[50em] gap-17 overflow-y-auto overflow-x-hidden scrollbar-custom h-[33.8rem]">
            <ProfileCard />
            <SectionFeedbacks />
        </main>
    )
}

export default About;