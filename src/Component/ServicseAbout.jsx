import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";

function ServicseAbout() {
  return (
    <div className="lg:px-[14rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
      <div className="breadcrum text-sm flex items-center gap-3 mb-4">
        <Link href="/index">Home</Link>
        <span>&#8226;</span>
        <span className="text-orange-300 text-sm">Contact</span>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] w-full lg:mb-0 md:mb-5 sm:mb-5 mb-5">
          <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl font-bold mb-5 leading-12">
            Algo Trading Software Development
          </h2>
          <p className="leading-8 mb-6 text-base">
            If you have questions, need support, or anything else, please fill
            the form below. We are here to help you.
          </p>
          <div className="inline-block">
            <Link
              className="flex items-center uppercase bg-blue-700 text-white px-8 py-5 rounded-full text-base font-medium"
              to="/"
            >
              Get A Quote
              <FaArrowTrendUp className="ml-5" />
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] w-full  flex justify-center">
          <img src="/images/services.png" alt="pcf-svg" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default ServicseAbout;
