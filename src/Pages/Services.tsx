import ABS from "../Component/ABS";
import Algo from "../Component/Algo";
import ServicseAbout from "../Component/ServicseAbout";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import ServiceSection from "../Component/ServiceSection";
import BenefitsSection from "../Component/BenefitsSection";

function Services() {
  return (
    <div>
      <ServicseAbout />
      <BenefitsSection />
      <ABS />
      <ServiceSection />
      <Algo />
      <div className="px-4 md:px-10 lg:px-[14rem] py-10">
        <div className="flex flex-wrap mt-8">
          <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] w-full">
            <h2 className="text-5xl font-bold mb-5 leading-12">
              Want to Hire Resources to Work With You?
            </h2>
            <p className="leading-8 mb-6 text-base">
              Web design app development for Android & iOS. We have over 5 years
              of experience in helping companies.
            </p>
            <div className="inline-block">
              <Link
                className="flex items-center uppercase bg-white text-black px-8 py-5 rounded-full text-base font-medium"
                to="/"
              >
                Let's Connect
                <FaArrowTrendUp className="ml-5" />
              </Link>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] w-full  flex justify-center">
            <img src="/images/services.png" alt="pcf-svg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
