import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/inner_pages/Home";
import About_us from "./components/inner_pages/About_us";
import Resturants from "./components/inner_pages/Resturants";
import Contact_us from "./components/inner_pages/Contact_us";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/restaurants" element={<Resturants />} />
        <Route path="/contact" element={<Contact_us />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
