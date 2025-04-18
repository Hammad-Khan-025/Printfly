import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import GraphicDesign from "./pages/services/GraphicDesign"

function App() {
  return (
    <Router>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphic-designing" element={<GraphicDesign />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
