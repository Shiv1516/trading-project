import { Link } from "react-router-dom";

function WWI() {
  return (
    <>
      <div className="wwi-section flex flex-wrap lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-30">
        <div className="lg:w-1/2 md:w-full sm:w-full w-full lg:mb-0 md:mb-4 sm:mb-4 mb-6">
          <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-5">
            <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>WHO WE ARE
          </h4>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold max-w-3xl leading-snug mb-5">
            Best Research-Based Trading Tool in India
          </h2>
          <p className="leading-6 text-gray-300 mb-4">
            Digi Core Wealth Builder V12 is a next-generation research tool
            developed for serious traders in the financial markets. Created by a
            team of experienced analysts and market practitioners, it is built
            to deliver precision, structure, and strategic clarity — all without
            relying on bots or automated systems. With over a decade of trading
            experience and a deep focus on mathematical, technical, and
            psychological research, Digi Core Wealth Builder V12 is trusted by
            disciplined traders who value logic, control, and performance. Every
            feature is designed to meet the evolving needs of the Indian and
            global markets.
          </p>
          <p className="leading-6 text-gray-300 mb-6">
            Digi Core Wealth Builder V12 prioritizes quality, security, and
            results. It supports structured decision-making for traders who
            prefer strategy over speculation. Whether you are refining your edge
            or scaling your knowledge, this tool is designed to deliver clarity,
            consistency, and long-term trading confidence.
          </p>
          <div className="inline-block mt-6">
            <Link
              className="flex items-center bg-blue-500 text-white px-8 py-5 rounded-full text-lg font-medium"
              to="/signin"
            >
              Don't have Account? Open here
            </Link>
          </div>
        </div>
        <div className="lg:w-[45%] md:w-full sm:w-full w-full flex lg:flex-row md:flex-row sm:flex-col flex-col lg:px-5 md:px-2 sm:py-2 m-auto">
          <div className="lg:px-4 md:px-0 sm:px-0 lg:w-[48%] md:w-full sm:w-full w-full">
            <div className="bg-gray-800 px-8 py-10 rounded-2xl flex flex-col mb-6">
              <h4 className="uppercase mb-4 text-xl">Projects</h4>
              <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl mb-4 text-orange-300 font-bold">
                250+
              </h2>
              <p className="text-lg mb-4">Projects delivered on time</p>
            </div>
            <div className="bg-gray-800 flex flex-col px-8 py-10 rounded-2xl lg:mb-0 md:mb-4 sm:mb-4 mb-4">
              <h4 className="uppercase mb-4 text-xl">YEARS</h4>
              <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl mb-4 text-orange-300 font-bold">
                14+
              </h2>
              <p className="text-lg mb-4">
                Years of experience in the financial industry.
              </p>
            </div>
          </div>
          <div className="mt-6 lg:mx-4 md:mx-0 sm:mx-0 mx-0 lg:w-[48%] md:w-[48%] sm:w-full w-full lg:mb-0 md:mb-4 sm:mb-4 mb-4">
            <div className="bg-gray-800 flex flex-col px-8 py-10 rounded-2xl mb-6">
              <h4 className="uppercase mb-4 text-xl">CLIENTS</h4>
              <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl mb-4 text-orange-300 font-bold">
                5,000+
              </h2>
              <p className="text-lg">Happy Customer We have across India.</p>
            </div>
            <div className="bg-gray-800 flex flex-col px-8 py-10 rounded-2xl lg:mb-0 md:mb-4 sm:mb-4 mb-4">
              <h4 className="uppercase mb-4 text-xl">COLLABORATION</h4>
              <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl mb-4 text-orange-300 font-bold">
                13+
              </h2>
              <p className="text-lg">
                Organizations trading backend system is powred by algodelta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WWI;
