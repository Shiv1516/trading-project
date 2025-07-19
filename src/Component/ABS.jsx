import { Link } from "react-router-dom";

function ABS() {
  return (
    <div className="abs-section lg:px-[14rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10 lg:w-[70%] md:w-full sm:w-full w-full m-auto text-center relative z-10">
      <span className="w-[60vh] h-[30vh] bg-blue-600 lg:flex md:hidden sm:hidden hidden rounded-b-full absolute z-[-1] m-auto translate-x-[19%] translate-y-0"></span>
      <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl font-bold mb-4 pt-15">
        All Brokers Supported
      </h2>
      <h5 className="text-2xl font-semibold italic mb-3">
        AlgoDelta's Algo Trading Platform is compatible with various standard
        trading API providers and brokers.
      </h5>
      <p className="text-gray-300 leading-7 text-lg mb-4">
        Our compatibility with multiple brokers ensures that our clients have a
        wide range of options to choose from, based on their preferences and
        trading strategies. Whether you use a broker for low latency execution,
        high-frequency trading, or for a simple and cost-effective way to trade,
        we have you covered.We understand the importance of using a trusted and
        reliable broker, which is why we make sure to work with only the best
        providers in the industry. Our team regularly tests and evaluates the
        performance of our supported brokers to make sure that they are
        providing our clients with the best possible trading experience.
      </p>
      <div className="flex gap-4 items-center m-auto justify-center pt-6 mb-4">
        <img
          src="images/abs-icon.png"
          alt="abs-icon"
          className="w-12 h-12 rounded"
        />
        <img
          src="images/abs-icon.png"
          alt="abs-icon"
          className="w-12 h-12 rounded"
        />
        <img
          src="images/abs-icon.png"
          alt="abs-icon"
          className="w-12 h-12 rounded"
        />
        <img
          src="images/abs-icon.png"
          alt="abs-icon"
          className="w-12 h-12 rounded"
        />
        <img
          src="images/abs-icon.png"
          alt="abs-icon"
          className="w-12 h-12 rounded"
        />
        <img
          src="images/abs-icon.png"
          alt="abs-icon"
          className="w-12 h-12 rounded"
        />
        <p className="text-orange-400 lg:flex md:flex sm:hidden hidden">
          +28 others
        </p>
      </div>
      <div className="inline-block my-8">
        <Link
          className="flex items-center bg-blue-500 text-white px-8 py-5 rounded-full text-lg font-medium"
          to="/"
        >
          Don't have Account? Open here
        </Link>
      </div>
      <span className="w-[20vh] h-[10vh] bg-orange-600 lg:flex md:hidden sm:hidden rounded-t-full m-auto"></span>
    </div>
  );
}
export default ABS;
