import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
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
      <Footer />
    </div>
  )
}

export default App
