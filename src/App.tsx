import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
function App() {

  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
