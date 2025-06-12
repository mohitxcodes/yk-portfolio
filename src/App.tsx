import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Experience from "./pages/landing/sections/Experience"
import HeroSection from "./pages/landing/sections/HeroSection"

function App() {

  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
