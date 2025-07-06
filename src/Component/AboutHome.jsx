import { Link } from "react-router-dom";

function AboutHome() {
  return (
    <div className="px-4 md:px-10 lg:px-[14rem] py-10">
      <div className="breadcrum text-sm flex items-center gap-3">
        <Link href="/index">Home</Link>
        <span>&#8226;</span>
        <span className="text-orange-300 text-sm">Contact</span>
      </div>

      <div className="flex flex-wrap mt-4">
        <div className="lg:w-1/2 md:w-full sm:w-full w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl leading-snug mb-4">
            About Us
          </h3>
          <p className="leading-6 text-gray-300 mb-4">
            ALGODELTA is a trusted technology leader in delivering advanced
            algorithmic trading software for the financial markets. Our expert
            team of developers and market strategists focuses on creating
            intelligent trading systems that boost efficiency, improve trade
            execution, and enhance profitability. Known for our strong
            commitment to innovation, security, and seamless user experience, we
            offer tailored solutions designed to meet the evolving needs of
            modern traders. ALGODELTA continues to set high standards with
            performance-driven software that empowers success in competitive
            markets.
          </p>
          <p className="leading-6 text-gray-300 mb-6">
            Our proprietary trading platform delivers powerful tools for manual
            traders and fully-automated systems for professional traders and
            asset managers. Designed for flexibility, the platform seamlessly
            integrates with a wide range of standard trading APIs and brokers,
            allowing you to enhance your existing infrastructure without
            disruption.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full w-full flex p-6">
          <img
            src="images/about_us.svg"
            alt="about-us-img"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
