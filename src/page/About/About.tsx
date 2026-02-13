import ProfileCard from "./components/ProfileCard.jsx";
import SectionFeedbacks from "./components/SectionRecommendations.jsx";
import { ScrollIndicator } from "../../ui/animations/index.jsx";

const About = () => {

    return (
        <div className="relative w-[50em] h-[30.8rem] 
                        [@media(min-height:910px)]:h-[45rem]
                        max-[690px]:fixed
                        max-[690px]:top-35
                        [@media(max-height:725px)]:h-[30rem]">
            <main className="flex flex-col items-center mb-12 w-full gap-17 overflow-y-auto overflow-x-hidden scrollbar-custom h-full text-justify hyphens-auto font-general
            max-[450px]:text-[14px]
            max-[690px]:mb-[0px]">
                <ProfileCard />
                <SectionFeedbacks />
            </main>

            <ScrollIndicator />
        </div>
    )
}

export default About;