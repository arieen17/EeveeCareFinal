import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Glaceon from "./pages/Glaceon";
import Poverty from "./pages/Poverty";
import Flareon from "./pages/Falreon";
import Jolteon from "./pages/Jolteon";
import Leafeon from "./pages/Leafeon";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/glaceon" element={<Glaceon />} />
        <Route path="/flareon" element={<Flareon />} />
        <Route path="/jolteon" element={<Jolteon />} />
        <Route path="/leafeon" element={<Leafeon />} />
        <Route path="/poverty" element={<Poverty />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
