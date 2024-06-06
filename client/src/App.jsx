import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import About from "./routes/About";
import Gallery from "./routes/Gallery";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;