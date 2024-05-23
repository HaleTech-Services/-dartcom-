import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUsPage from "./pages/AboutPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" Component={AboutUsPage} />
      </Routes>
    </Router>
  );
}

export default App;
