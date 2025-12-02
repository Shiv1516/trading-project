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
import NotFound from "./Pages/NotFound";
import Footer from "./Component/Footer";
import "./index.css";
import Login from "./Pages/Login";
import SignupForm from "./Pages/SignupForm";
import WhatsApp from "./Component/Whatsapp";

function App() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <Header />
      <WhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/copytrading" element={<CopyTrading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignupForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
