import { Link } from "react-router-dom";

function ABS() {
  return (
    <div className="abs-section lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10 lg:w-[90%] md:w-full sm:w-full w-full m-auto text-center relative z-10">
      <span className="w-[60vh] h-[30vh] bg-blue-600 lg:flex md:hidden sm:hidden hidden rounded-b-full absolute z-[-1] m-auto translate-x-[60%] translate-y-0"></span>
      <h2 className="lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold mb-4 pt-15">
        All Brokers Supported
      </h2>
      <h5 className="text-2xl font-semibold italic mb-3">
        All Brokers and Charting Platforms Are Supported by our Research Tool
      </h5>
      <p className="text-gray-300 leading-7 text-lg mb-4">
        Digi Core Wealth Builder V12 is engineered to work smoothly with all
        leading charting systems and research-driven trading environments —
        providing complete flexibility and seamless integration. Our system is
        designed to adapt to your preferred tools, whether you're working with
        real-time charting systems, signal-based strategies, or structured
        execution logic. We ensure optimal performance, precision, and control —
        without relying on any locked infrastructure. Each feature has been
        tested across various market environments to maintain stability, speed,
        and strategic clarity — so you can focus on execution, not limitations.
      </p>
      <div className="flex gap-4 items-center m-auto justify-center pt-6 mb-4 w-full">
        <img
          src="images/broker-icons/dhan.svg"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <img
          src="images/broker-icons/5paisa.webp"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <img
          src="images/broker-icons/finvasia.webp"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <img
          src="images/broker-icons/fyers.svg"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <img
          src="images/broker-icons/upstox.svg"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <img
          src="images/broker-icons/abs-icon.png"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <img
          src="images/broker-icons/flattrade.svg"
          alt="broker-icon"
          className="w-10 h-10 rounded"
        />
        <p className="text-orange-400 lg:flex md:flex sm:hidden hidden">
          +28 others
        </p>
      </div>
      <div className="inline-block my-8">
        <Link
          className="flex items-center bg-blue-500 text-white px-8 py-5 rounded-full text-lg font-medium"
          to="/signin"
        >
          Don't have Account? Open here
        </Link>
      </div>
      <span className="w-[30vh] h-[15vh] bg-orange-600 lg:flex md:hidden sm:hidden rounded-t-full m-auto"></span>
    </div>
  );
}
export default ABS;
