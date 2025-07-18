import "./App.css";
import Header from "./Component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Products from "./Pages/Products";
import Pricing from "./Pages/Pricing";
import CopyTrading from "./Pages/CopyTrading";
import Footer from "./Component/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/copytrading" element={<CopyTrading />} />
      </Routes>
      <Footer />
      <div className="fixed right-[3%] bottom-[5%] z-50">
        <a
          href="https://wa.me/917052211516"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/whatsapp.png"
            alt="whats-app icon"
            className="w-[48px]"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
