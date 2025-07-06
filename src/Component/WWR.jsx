import { Link } from "react-router-dom";

function WWI() {
  return (
    <>
      <div className="wwi-section flex flex-wrap px-4 md:px-10 lg:px-[14rem] py-30">
        <div className="lg:w-1/2 md:w-full sm:w-full">
          <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-5">
            <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>WHO WE ARE
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl leading-snug mb-4">
            Best Trading Software Provider in India
          </h2>
          <p className="leading-6 text-gray-300 mb-4">
            ALGODELTA is a technology company that specializes in developing
            algorithmic trading software for the financial market. We have a
            team of experienced developers and traders who are dedicated to
            creating advanced solutions that make the trading process more
            efficient. With over 14 years of experience and a focus on
            innovation, ALGODELTA is a trusted provider of advanced trading
            solutions for clients, powering their trades with cutting-edge
            technology tailored to meet evolving market demands.
          </p>
          <p className="leading-6 text-gray-300 mb-6">
            ALGODELTA has a strong focus on quality, security, and user
            experience, and ALGODELTA have a reputation for delivering
            customized software that meets and exceeds client expectations. Our
            proprietary trading platform is equipped with advanced tools and
            features for manual traders, as well as fully-automated trading
            systems for professional traders and asset managers.
          </p>
          <div className="inline-block mt-6">
            <Link
              className="flex items-center bg-blue-500 text-white px-8 py-5 rounded-full text-lg font-medium"
              to="/"
            >
              Don't have Account? Open here
            </Link>
          </div>
        </div>
        <div className="lg:w-[45%] md:w-full sm:w-full flex px-5 m-auto">
          <div className="mx-4 lg:w-[48%] md:w-full sm:w-full">
            <div className="bg-gray-800 px-8 py-10 rounded-2xl mb-6 flex flex-col">
              <h4 className="uppercase mb-4 text-xl">Projects</h4>
              <h2 className="text-5xl mb-4 text-orange-300 font-bold">250+</h2>
              <p className="text-lg mb-4">Projects delivered on time</p>
            </div>
            <div className="bg-gray-800 flex flex-col px-8 py-10 rounded-2xl">
              <h4 className="uppercase mb-4 text-xl">YEARS</h4>
              <h2 className="text-5xl mb-4 text-orange-300 font-bold">14+</h2>
              <p className="text-lg mb-4">
                Years of experience in the financial industry.
              </p>
            </div>
          </div>
          <div className="mt-6 mx-4 lg:w-[48%] md:w-[48%] sm:w-full">
            <div className="bg-gray-800 flex flex-col px-8 py-10 rounded-2xl mb-6">
              <h4 className="uppercase mb-4 text-xl">CLIENTS</h4>
              <h2 className="text-5xl mb-4 text-orange-300 font-bold">
                5,000+
              </h2>
              <p className="text-lg">Happy Customer We have across India.</p>
            </div>
            <div className="bg-gray-800 flex flex-col px-8 py-10 rounded-2xl">
              <h4 className="uppercase mb-4 text-xl">COLLABORATION</h4>
              <h2 className="text-5xl mb-4 text-orange-300 font-bold">13+</h2>
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
