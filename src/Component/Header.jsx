import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import LoginPopup from "../Pages/Login";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="bg-[#1d1c1c70] text-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-[9rem] py-3">
        <Link to="/index" className="text-2xl font-bold">
          <img src="/images/logo.png" alt="logo" className="w-[70px]" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>

        <ul className="hidden lg:flex gap-4 text-base font-medium">
          <Link className="p-2" to="/index">
            Home
          </Link>
          <Link className="p-2" to="/about">
            About Us
          </Link>
          <Link className="p-2" to="/services">
            Services
          </Link>
          <Link className="p-2" to="/blogs">
            Blogs
          </Link>
          <Link className="p-2" to="/products">
            Products
          </Link>
          <Link className="p-2" to="/pricing">
            Pricing
          </Link>
          <Link className="p-2" to="/copytrading">
            Copy Trading
          </Link>
        </ul>

        <div className="hidden lg:flex gap-3 items-center">
          <Link
            to="/"
            className="bg-blue-500 p-3 text-white text-2xl rounded-full"
          >
            <IoCall />
          </Link>
          <Link
            className="flex items-center uppercase bg-orange-600 px-5 py-3 rounded-full text-lg font-medium"
            // to="/login"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
            <FaArrowTrendUp className="ml-2" />
          </Link>
        </div>
      </div>
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-4 bg-black px-6 py-4 text-base font-medium">
          <Link onClick={() => setMenuOpen(false)} to="/index">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">
            About Us
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/services">
            Services
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/blogs">
            Blogs
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/products">
            Products
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/pricing">
            Pricing
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/copytrading">
            Copy Trading
          </Link>
          <div className="flex gap-3 pt-2">
            <Link
              to="/"
              className="bg-blue-500 p-3 text-white text-xl rounded-full"
            >
              <IoCall />
            </Link>
            <Link
              className="flex items-center uppercase bg-orange-600 px-4 py-2 rounded-full text-base font-medium"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
              <FaArrowTrendUp className="ml-2" />
            </Link>
          </div>
        </ul>
      )}
    </header>
  );
}

export default Header;
