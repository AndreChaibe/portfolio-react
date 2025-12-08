import ProfileCard from "./components/ProfileCard";
import SectionFeedbacks from "./components/SectionRecommendations";

const About = () => {

    return (
        <main className="flex flex-col items-center mb-12 w-[50em] gap-17 overflow-y-auto overflow-x-hidden scrollbar-custom h-[30.8rem] text-justify hyphens-auto font-general
        max-[450px]:text-[14px]
       [@media(min-height:910px)]:h-[45rem]">
            <ProfileCard />
            <SectionFeedbacks />
        </main>
    )
}

export default About;