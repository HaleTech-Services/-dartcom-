import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./routes/Projects";

function App() {
  return (
    <main className="min-h-screen w-full">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} /> 
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </main>
  );
}

export default App;
