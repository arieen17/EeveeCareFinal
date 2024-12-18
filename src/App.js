import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sylveon from "./pages/Sylveon";
import Vaporeon from "./pages/Vaporeon";
import Glaceon from "./pages/Glaceon";
import Flareon from "./pages/Flareon";
import Jolteon from "./pages/Jolteon";
import Leafeon from "./pages/Leafeon";
import Umbreon from "./pages/Umbreon";
import Espeon from "./pages/Espeon";


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
        <Route path="/umbreon" element={<Umbreon />} />
        <Route path="/sylveon" element={<Sylveon />} />
        <Route path="/vaporeon" element={<Vaporeon />} />
        <Route path="/espeon" element={<Espeon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
