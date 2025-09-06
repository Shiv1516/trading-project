import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <div className="whatsapp-sticky ">
      <Link
        to="https://api.whatsapp.com/send?phone=919541190063&text=Hello!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn flex justify-center items-center text-white fixed rounded-full z-50 w-14 h-14 text-3xl border-0 bg-green-500 leading-10 bottom-8 right-9"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
}
export default WhatsApp;