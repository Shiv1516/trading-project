import { Link } from "react-router-dom";
import { RiYoutubeFill } from "react-icons/ri";

function PCF() {
  return (
    <div className="pcf-section lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-4">
      <div className="flex justify-center lg:py-8 md:py-4 sm:py-3">
        <div className="lg:w-[90%] md:w-full sm:w-full text-center lg:mb-0 md:mb-5 sm:mb-6 mb-6">
          <h2 className="lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold mb-5">
            System Compliance & Research-Backed Features
          </h2>
          <p className="leading-6 text-gray-600">
            Unlike traditional systems tied to fixed infrastructures, Digi Core
            Wealth Builder V12 offers complete operational flexibility. Our
            research-aligned framework is designed to support diverse trading
            environments while ensuring full user control, data security, and
            regulatory compatibility — giving traders the freedom to work
            seamlessly across their preferred setups.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mb-0 md:mb-5 sm:mb-5 mb-5">
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:pr-6 md:pr-0 sm:pr-0">
          <h3 className="text-3xl font-bold mb-4">
            Precision Execution with Algorithmic Tools
          </h3>
          <p className="text-base leading-8 text-gray-600">
            Digi Core Wealth Builder V12 is powered by proprietary algorithmic
            tools developed through deep technical, mathematical, and
            psychological research. These tools help traders execute
            well-structured strategies with real-time precision and complete
            human control. Every decision is backed by data — not bots —
            ensuring clarity, discipline, and logic in every move. Whether
            you're refining entry levels or managing execution speed, V12
            supports your strategy with unmatched consistency and focus.
          </p>
          {/* <Link to="/" className="text-orange-500 text-base flex items-center">
            Watch Video
            <RiYoutubeFill className="ml-2" />
          </Link> */}
        </div>
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full">
          <img src="images/pcf.gif" alt="pcf-img" className="flex p-4" />
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mb-0 md:mb-5 sm:mb-5 mb-5">
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full lg:mb-0 md:mb-4 sm:mb-4 mb-4">
          <img
            src="images/pcf.gif"
            alt="pcf-img"
            className="flex lg:p-4 md:p-2 sm:p-4"
          />
        </div>
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:pl-6 md:pl-0 sm:pl-0">
          <h3 className="text-3xl font-bold mb-4">Smart Order Logic Engine</h3>
          <p className="text-base leading-8 text-gray-600">
            Take full control of your strategy execution with Digi Core Wealth
            Builder V12’s intelligent order logic system. Define your own entry
            conditions, stop-loss levels, targets, and trailing logic — all
            guided by real-time research and precise market behavior. Built for
            traders who rely on discipline and structure, this tool helps
            simplify execution, refine risk handling, and strengthen overall
            decision-making — without relying on external automation. Trade with
            clarity, consistency, and research-backed confidence.
          </p>
          {/* <Link to="/" className="text-orange-500 text-base flex items-center">
            Watch Video
            <RiYoutubeFill className="ml-2" />
          </Link> */}
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mb-0 md:mb-5 sm:mb-5 mb-5">
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full lg:pr-6 md:pr-0 sm:pr-0 lg:mb-0 md:mb-4 sm:mb-4 mb-4">
          <h3 className="text-3xl font-bold mb-4">
            Strategic Signal Integration Tools
          </h3>
          <p className="text-base leading-8 text-gray-600">
            Digi Core Wealth Builder V12 allows you to integrate real-time
            market signals from trusted research environments such as
            TradingView, MT4, MT5, and others — using custom logic connectors
            for enhanced precision and timely execution. These tools are built
            to support disciplined traders who operate on structure, not
            automation. Process external signals with complete control, while
            maintaining the clarity and consistency of your strategy. This
            system enhances responsiveness and ensures that your execution
            remains focused, research-driven, and fully in your hands.
          </p>
          {/* <Link to="/" className="text-orange-500 text-base flex items-center">
            Watch Video
            <RiYoutubeFill className="ml-2" />
          </Link> */}
        </div>
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full">
          <img src="images/pcf.gif" alt="pcf-img" className="flex p-4" />
        </div>
      </div>
    </div>
  );
}
export default PCF;
