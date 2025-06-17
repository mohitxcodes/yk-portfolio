import CollabSection from "./sections/CollabSection";
import Experience from "./sections/Experience";
import HeroSection from "./sections/HeroSection";
import HighlightsSection from "./sections/HighlightsSection";


function LandingPage() {
    return (
        <>
            <HeroSection />
            <HighlightsSection />
            <Experience />
            <CollabSection />
        </>
    )
}

export default LandingPage;