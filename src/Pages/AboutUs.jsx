import AboutHome from "../Component/AboutHome";
import Algo from "../Component/Algo";
import Connect from "../Component/Connect";
import Team from "../Component/Team";

function AboutUs() {
  return (
    <div>
      <AboutHome />
      <div className="flex flex-wrap px-4 md:px-10 lg:px-[14rem] py-6">
        <div className="lg:w-1/2 md:w-full sm:w-full w-full pr-8">
          <h4 className="text-3xl font-bold mb-2 leading-8">
            Empowering traders and businesses with innovative and reliable
            technology solutions.
          </h4>
          <img src="images/empowering_traders.svg" className="w-full" />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full w-full">
          <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-6">
            <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>Mission
          </h4>
          <p className="text-sm mb-5 text-gray-400 leading-6">
            We strive to bring inspiration and innovation to every business in
            the world through our end-to-end online solutions.
          </p>
          <h4 className="text-3xl font-bold mb-6 leading-10">
            ALGODELTA aims to bring together all the key elements of Algo
            Trading including charting, data, platforms, brokers, systems and
            strategies to provide a comprehensive solution to clients.
          </h4>
          <h3 className="text-base leading-7">
            ALGODELTA leverages its expertise to overcome even the toughest
            challenges, delivering unparalleled results and value to clients and
            partners.
          </h3>
        </div>
      </div>
      <Team/>
      <div className="flex flex-wrap px-4 md:px-10 lg:px-[14rem] py-6">
        <div className="lg:w-1/2 md:w-full sm:w-full w-full">
          <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-6">
            <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>Mission
          </h4>
          <p className="text-sm mb-5 text-gray-400 leading-6">
            We strive to bring inspiration and innovation to every business in
            the world through our end-to-end online solutions.
          </p>
          <h4 className="text-3xl font-bold mb-6 leading-10">
            ALGODELTA aims to bring together all the key elements of Algo
            Trading including charting, data, platforms, brokers, systems and
            strategies to provide a comprehensive solution to clients.
          </h4>
          <h3 className="text-base leading-7">
            ALGODELTA leverages its expertise to overcome even the toughest
            challenges, delivering unparalleled results and value to clients and
            partners.
          </h3>
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full w-full pr-8">
          <h4 className="text-3xl font-bold mb-2 leading-8">
            Empowering traders and businesses with innovative and reliable
            technology solutions.
          </h4>
          <img src="images/empowering_traders.svg" className="w-full" />
        </div>
      </div>
      <Algo />
      <Connect />
    </div>
  );
}
export default AboutUs;
