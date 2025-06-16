import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import CollabSection from "./pages/landing/sections/CollabSection"
import Experience from "./pages/landing/sections/Experience"
import HeroSection from "./pages/landing/sections/HeroSection"
import HighlightsSection from "./pages/landing/sections/HighlightsSection"

function App() {

  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <HighlightsSection />
      <Experience />
      <CollabSection />
      <Footer />
    </div>
  )
}

export default App
