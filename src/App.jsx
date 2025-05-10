import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import GraphicDesign from "./pages/services/GraphicDesign";
import UIUXDesign from "./pages/services/UIUXDesign";
import ELearningCourses from "./pages/services/ELearningCourses";
import DesktopPublication from "./pages/services/DesktopPublication";
import WebAndApp from "./pages/services/WebAndApp";
import ELearningVideos from "./pages/services/ELearningVideos";
import IllustrationDesign from "./pages/services/IllustrationDesign";
import SearchEngine from "./pages/services/SearchEngine";
import DocumentoryVideos from "./pages/services/DocumentoryVideos";
import PrintingPublication from "./pages/services/PrintingPublication";
import ECommerceStore from "./pages/services/ECommerceStore";
import IllustrationVideos from "./pages/services/IllustrationVideos";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/services/graphic-designing" element={<GraphicDesign />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/e-learning-training-courses" element={<ELearningCourses />} />
          <Route path="/services/desktop-publication" element={<DesktopPublication />} />
          <Route path="/services/web-app-development" element={<WebAndApp />} />
          <Route path="/services/e-learning-training-videos" element={<ELearningVideos />} />
          <Route path="/services/illustration-design" element={<IllustrationDesign />} />
          <Route path="/services/search-engine-optimization" element={<SearchEngine />} />
          <Route path="/services/documentary-videos" element={<DocumentoryVideos />} />
          <Route path="/services/printing-publication" element={<PrintingPublication />} />
          <Route path="/services/ecommerce-store-services" element={<ECommerceStore />} />
          <Route path="/services/illustrations-videos" element={<IllustrationVideos />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
