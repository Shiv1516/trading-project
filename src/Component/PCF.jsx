import { Link } from "react-router-dom";
import { RiYoutubeFill } from "react-icons/ri";

function PCF() {
  return (
    <div className="pcf-section px-4 md:px-10 lg:px-[14rem] py-4">
      <div className="flex justify-center py-8">
        <div className="lg:w-[60%] md:w-full sm:w-full text-center">
          <h2 className="text-5xl font-bold mb-4">
            Platform Compliance & Features
          </h2>
          <p className="leading-6 text-gray-300">
            Unlike traditional platforms that lock users into a single
            brokerage, our system is designed to be broker-independent. Whether
            you trade with any INDIAN brokers, our platform integrates
            seamlessly with multiple brokers, giving traders the flexibility to
            use their preferred service providers.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:pr-6 md:pr-0 sm:pr-0">
          <h3 className="text-3xl font-bold mb-4">Copy Trading</h3>
          <p className="text-base leading-8 text-gray-300">
            Experience the power of our automated copy trading system that
            replicates trades with precision across multiple Demat accounts.
            Enjoy both multiplier and fixed lot modes for scalable and
            consistent trade execution. Perfect for traders seeking efficiency
            and high-speed performance. Our copy trading solution is designed
            for all skill levels and optimized for seamless integration with
            your trading strategy. Benefit from dynamic trade replication and
            real-time execution. Enhance your portfolio with reliable, automated
            trading features.
          </p>
          <Link to="/" className="text-orange-500 text-base flex items-center">
            Watch Video
            <RiYoutubeFill className="ml-2" />
          </Link>
        </div>
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full">
          <img src="images/pcf.gif" alt="pcf-img" className="flex p-4" />
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full">
          <img src="images/pcf.gif" alt="pcf-img" className="flex p-4" />
        </div>
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:pl-6 md:pl-0 sm:pl-0">
          <h3 className="text-3xl font-bold mb-4">Advanced Order Manager</h3>
          <p className="text-base leading-8 text-gray-300">
            Gain full control of your trading strategy with our advanced Order
            Manager, designed for precision and automation. Set detailed
            parameters for entry triggers, stop-losses, targets, and trailing
            stops using real-time market data. Optimize your trades with a tool
            that caters to diverse market conditions. Easily group multiple
            positions under unified targets and stop-loss settings for
            sophisticated risk management. Simplify complex strategy execution
            and maximize profitability. Enhance your trading efficiency with our
            state-of-the-art order management system.
          </p>
          <Link to="/" className="text-orange-500 text-base flex items-center">
            Watch Video
            <RiYoutubeFill className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:pr-6 md:pr-0 sm:pr-0">
          <h3 className="text-3xl font-bold mb-4">
            Bridge / Api / Webhook Integration
          </h3>
          <p className="text-base leading-8 text-gray-300">
            Connect effortlessly to top platforms like TradingView, MT4, MT5,
            and AmiBroker with our cutting-edge bridge integration. Leverage
            webhook technology for real-time signal processing and automated
            trade execution. Stay ahead in the market with instant and accurate
            strategy deployment. This integration streamlines your trading
            workflow and enhances overall system responsiveness. Automate your
            strategy execution with confidence and precision. Experience a
            flexible, high-performance environment for all your trading needs.
          </p>
          <Link to="/" className="text-orange-500 text-base flex items-center">
            Watch Video
            <RiYoutubeFill className="ml-2" />
          </Link>
        </div>
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full">
          <img src="images/pcf.gif" alt="pcf-img" className="flex p-4" />
        </div>
      </div>
      
    </div>
  );
}
export default PCF;
