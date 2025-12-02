import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <div className="lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-4">
      <div className="flex flex-wrap bg-blue-600 text-white p-8 rounded-4xl">
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:mb-0 md:mb-4 sm:mb-4 mb-4">
          <h2 className="lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold mb-5 leading-12">
            Let’s Build Something Powerful Together!
          </h2>
          <p className="leading-8 mb-6 text-lg">
            At Digi Core Wealth Builder V12, we collaborate with serious traders
            and educators to develop custom research tools, algorithmic systems,
            and strategic solutions — backed by precision, security, and deep
            market understanding. Whether you're looking to upgrade your trading
            logic, enhance your learning model, or align with high-performance
            research — we’re ready to help you bring your vision to life.
          </p>
          <div className="inline-block">
            <Link
              className="flex items-center uppercase bg-white text-black px-8 py-5 rounded-full text-base font-medium"
              to="/"
            >
              Let's Get Connected
              <FaArrowTrendUp className="ml-5" />
            </Link>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full  flex justify-center">
          <img
            src="/images/pcf.svg"
            alt="pcf-svg"
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
export default Connect;
