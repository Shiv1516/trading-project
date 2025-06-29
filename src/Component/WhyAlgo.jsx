import Marquee from "react-fast-marquee";

function WhyAlgo() {
  return (
    <div className="whyalgo-section px-4 md:px-10 lg:px-[14rem] py-4 mt-10">
      <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-8 justify-center">
        <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>Important Notice
        !!
      </h4>

      <div className="border p-2 border-gray-600 lg:w-[70%] md:w-[100%] sm:w-[100%] m-auto rounded my-10">
        <Marquee speed={50} gradient={false}>
          🚀 AlgoDelta Platform &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 📈
          Real-Time Execution &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 💹
          Strategy Automation
        </Marquee>
      </div>

      <div className="flex justify-center py-8 mb-6">
        <div className="lg:w-[60%] md:w-full sm:w-full text-center">
          <h2 className="text-5xl font-bold mb-4">Why Algodelta</h2>
          <p className="leading-6 text-gray-300">
            Choose Algodelta for cutting-edge trading solutions that empower you
            with innovative tools and effortless API integration, enabling
            tailored automation strategies to enhance your trading experience.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full flex">
          <div className="border border-gray-800 rounded-2xl overflow-hidden m-4">
            <img
              src="images/whyalgo1.webp"
              alt="whyalgo"
              className="w-full max-h-[300px] object-contain"
            />
            <div className="p-3">
              <h4 className="text-xl font-bold mb-4">Cross-Broker Platform</h4>
              <p className="leading-7 text-gray-300">
                Trade with confidence across 25+ integrated brokers. AlgoDelta’s
                multi-broker platform gives you real-time execution, seamless
                switching, and total flexibility.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full flex">
          <div className="border border-gray-800 rounded-2xl overflow-hidden m-4">
            <img
              src="images/whyalgo.webp"
              alt="whyalgo"
              className="w-full max-h-[300px] object-contain"
            />

            <div className="p-3">
              <h4 className="text-xl font-bold mb-4">Cross-Broker Platform</h4>
              <p className="leading-7 text-gray-300">
                Stay in sync with your broker — view accurate P&L, open
                positions, orders, and trades in real time. Modify, cancel,
                convert, or square off — all with lightning-fast, one-click
                actions. Built for traders who can’t afford delays.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] md:w-[100%] sm:w-[100%] w-full flex">
          <div className="border border-gray-800 rounded-2xl overflow-hidden m-4">
            <img
              src="images/whyalgo.webp"
              alt="whyalgo"
              className="w-full max-h-[300px] object-contain"
            />
            <div className="p-3">
              <h4 className="text-xl font-bold mb-4">Cross-Broker Platform</h4>
              <p className="leading-7 text-gray-300">
                Trade with confidence across 25+ integrated brokers. AlgoDelta’s
                multi-broker platform gives you real-time execution, seamless
                switching, and total flexibility.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] w-full flex">
          <div className="border border-gray-800 rounded-2xl overflow-hidden m-4">
            <img
              src="images/whyalgo.webp"
              alt="whyalgo"
              className="w-full max-h-[300px] object-contain"
            />
            <div className="p-3">
              <h4 className="text-xl font-bold mb-4">Cross-Broker Platform</h4>
              <p className="leading-7 text-gray-300">
                Trade with confidence across 25+ integrated brokers. AlgoDelta’s
                multi-broker platform gives you real-time execution, seamless
                switching, and total flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyAlgo;
