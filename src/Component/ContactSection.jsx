import React from "react";
import { MdWhatsapp } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";

export default function ContactSection() {
  return (
    <div className="lg:w-[25%] md:w-[50%] sm:w-full mt-6">
      <img
        src="images/whyalgo1.webp"
        alt="Call back request"
        className="w-full"
      />
      <div>
        <h3 className="text-xl font-semibold mb-2 pt-6">Request a Call Back</h3>
        <p className="text-gray-300 text-sm">
          Read more about how Algodelta works and how it can help you.
        </p>
      </div>
      <hr className="border-gray-700 my-6" />
      <div>
        <h3 className="text-lg font-semibold mb-6">Have Questions?</h3>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <MdWhatsapp />
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-300">Connect on WhatsApp</p>
            <p className="text-orange-400 font-medium text-lg">
              +91 95376 74727
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <FiMessageCircle />
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-300">Begin a Quick Discussion</p>
            <p className="text-orange-400 font-medium text-lg">
              Live Chat With Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
