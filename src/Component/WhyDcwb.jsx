import Marquee from "react-fast-marquee";

function WhyDcwb() {
  return (
    <div className="whyalgo-section lg:px-[14rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-4 mt-10">
      <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-8 justify-center">
        <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>Important Notice
        !!
      </h4>

      <div className="border p-2 border-gray-600 lg:w-[70%] md:w-[100%] sm:w-[100%] m-auto rounded my-10">
        <Marquee speed={50} gradient={false}>
          All content, tools, and strategies provided on this website are
          intended **strictly for educational purposes only**. We do not offer
          any investment advice or trading recommendations.
        </Marquee>
      </div>

      <div className="flex justify-center lg:py-8 md:py-4 sm:py-3 lg:mb-6 md:mb-3 sm:mb-2">
        <div className="lg:w-[90%] md:w-full sm:w-full text-center">
          <h2 className="lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold mb-5">
            Why Digi Core Wealth Builder
          </h2>
          <p className="leading-6 text-gray-300">
            Digi Core Wealth Builder V12 is designed for serious traders who
            demand precision, clarity, and full control over their decisions.
            Powered by advanced research tools and grounded in deep technical,
            mathematical, and psychological analysis, it enables disciplined
            trading — with complete human oversight at every step. No
            third-party systems. No dependencies. Just pure research-driven
            confidence.
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
            <div className="lg:p-3 md:p-2 sm:p-2 p-2">
              <h4 className="text-xl font-bold mb-4">
                Full Control in Your Hands
              </h4>
              <p className="leading-7 text-gray-300">
                Take command of every trade decision with complete clarity and
                confidence. Digi Core Wealth Builder V12 empowers you to operate
                independently — backed by logic, discipline, and research-driven
                insights. No third-party interference. Just your strategy, your
                execution.
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

            <div className="lg:p-3 md:p-2 sm:p-2 p-2">
              <h4 className="text-xl font-bold mb-4">
                Real-Time Strategic Visibility
              </h4>
              <p className="leading-7 text-gray-300">
                Access live, actionable views of market movement, levels, and
                strategy zones — precisely when you need them. Stay one step
                ahead with a system that updates in real-time and reflects your
                personalized trading logic.
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
            <div className="lg:p-3 md:p-2 sm:p-2  p-2">
              <h4 className="text-xl font-bold mb-4">
                Continuously Evolving Research Tools
              </h4>
              <p className="leading-7 text-gray-300">
                Our tools don’t just react to the market — they grow with it.
                Built on technical, mathematical, and psychological research,
                Digi Core Wealth Builder V12 adapts with changing trends and
                empowers traders with fresh, relevant insights at every stage.
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
            <div className="lg:p-4 md:p-2 sm:p-2 p-2">
              <h4 className="text-xl font-bold mb-4">
                Secured, Strategy-Focused Environment
              </h4>
              <p className="leading-7 text-gray-300">
                Your data, logic, and research remain 100% confidential. With
                multi-layer protection and zero reliance on external systems,
                you trade in a secure space designed purely for high-performance
                strategy development and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyDcwb;
