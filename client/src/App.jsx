import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import Services from "./routes/Services";

function App () {
  return (
    <main className="min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;