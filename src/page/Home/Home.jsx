import IntroductionArea from "./components/IntroductionArea.jsx";

const Home = () => {
    
    return (
        <>
        <main className="flex justify-center items-center w-[50em] max-[690px]:mb-[10%] max-[575px]:w-[100vw] max-[575px]:mb-[5rem]">
            <IntroductionArea />
        </main>
        </>
    )
}

export default Home;
