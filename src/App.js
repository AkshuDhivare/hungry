import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/inner_pages/Home";
import About_us from "./components/inner_pages/About_us";
import Menus from "./components/inner_pages/Menus";
import Contact_us from "./components/inner_pages/Contact_us";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/menu" element={<Menus />} />
        <Route path="/contact" element={<Contact_us />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
