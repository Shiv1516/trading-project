import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white px-4 md:px-10 lg:px-[14rem] py-4">
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full">
          <Link to="/" className="flex items-center mb-6">
            <img src="images/logo.png" alt="logo" className="w-48" />
          </Link>

          <p className="mb-1 text-gray-300">Send Us an Email:</p>
          <Link
            to="mailto:contact@algodelta.com"
            className="text-orange-400 font-semibold mb-4 block"
          >
            contact@algodelta.com
          </Link>

          <p className="mb-1 text-gray-300">
            Give Us a Call (Mon-Sat, 9 AM - 6 PM):
          </p>
          <div className="space-y-2 text-lg mt-2">
            <div className="flex items-center flex-wrap">
              <span className="text-gray-400 w-1/2">Support Team</span>:
              <FaPhoneAlt className="inline mx-2" />
              <FaWhatsapp className="inline mx-2" />
              <span className="text-white font-medium">+91 95376 74727</span>
            </div>
            <div className="flex items-center flex-wrap">
              <span className="text-gray-400 w-1/2">
                Sales and Franchise support
              </span>
              : <FaPhoneAlt className="inline mx-2" />
              <FaWhatsapp className="inline mx-2" />
              <span className="text-white font-medium">+91 83476 74727</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-4">Follow Us</p>
            <div className="flex gap-4">
              <Link to="">
                <FaTwitter className="hover:text-orange-500 text-xl" />
              </Link>
              <Link to="">
                <FaFacebookF className="hover:text-orange-500 text-xl" />
              </Link>
              <Link to="">
                <FaYoutube className="hover:text-orange-500 text-xl" />
              </Link>
              <Link to="">
                <FaLinkedinIn className="hover:text-orange-500 text-xl" />
              </Link>
              <Link to="">
                <FaInstagram className="hover:text-orange-500 text-xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full flex flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 sm:w-full w-full flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-400 text-lg">
              Company Links
            </h4>
            <ul className="ml-2">
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  About Us
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  Contact Us
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  Services
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  Our Products
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  Copy Trading
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  Pricing
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 md:w-1/2 sm:w-full w-full flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-400 text-lg">
              Exchange
            </h4>
            <ul className="ml-2">
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  BSE India
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  NSE India
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-1"
                >
                  MCX India
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 md:w-1/2 sm:w-full w-full flex flex-col">
            <h4 className="font-semibold mb-3 text-gray-400 text-lg">
              Our Services
            </h4>
            <ul className="ml-2">
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-2"
                >
                  Algo Trading Platform
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-2"
                >
                  Market Scanning Tools
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-2"
                >
                  Multi User System
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-2"
                >
                  Integration with Brokers
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-2"
                >
                  Multi Brokers System
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="my-2.5">
                <Link
                  to="/"
                  className="relative group text-white hover:text-orange-500 my-2"
                >
                  Consulting and Advisory Services
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 gap-2 py-3 border-t border-gray-700 mt-6">
        <p>© 2025 All Rights Reserved By ALGODELTA</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400">
            Refund Policy
          </a>
          <a href="#" className="hover:text-orange-400">
            Terms of Use
          </a>
          <a href="#" className="hover:text-orange-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
