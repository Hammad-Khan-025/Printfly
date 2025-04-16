import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"


function App() {

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-50">
      <Header/>
      </div>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
