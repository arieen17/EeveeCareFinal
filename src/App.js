import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Glaceon from "./pages/Glaceon";
import Poverty from "./pages/Poverty";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/glaceon" element={<Glaceon />} />
        <Route path="/poverty" element={<Poverty />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;