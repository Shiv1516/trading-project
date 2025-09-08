import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [
    "images/hero-icon-01.png",
    "images/hero-icon-01.png",
    "images/hero-icon-01.png",
    "images/hero-icon-01.png",
  ];

  return (
    <div className="hero-slider">
      <div className="hero flex">
        <div className="lg:w-[60%] md:w-full sm:w-full w-full flex justify-center flex-col items-center m-auto">
          <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl font-bold mb-4 leading-14 text-center">
            India’s Most Trusted Trading Intelligence System
          </h2>
          <p className="leading-8 text-xl mb-4 text-center">
            Unlock smarter trades with a powerful blend of technical,
            mathematical, and psychological market research. From custom tools
            to proven strategies and dynamic chart insights — Digi Core Wealth
            Builder V12 delivers precision, clarity, and confidence to every
            trade.
          </p>
          <Link
            className="flex items-center uppercase bg-orange-600 px-6 py-3 text-xl rounded-full font-medium"
            to="/login"
          >
            Login
            <FaArrowTrendUp className="ml-2" />
          </Link>
        </div>
      </div>
      <h4 className="text-lg font-medium text-center pb-6">
        Now includes complete offline and online training.
        <div className="mt-6 px-4 lg:w-[60%] md:w-full sm:w-full w-full m-auto">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="flex justify-center px-3">
                <img src={src} alt={`hero-icon-${index}`} className="w-full" />
              </div>
            ))}
          </Slider>
        </div>
      </h4>
    </div>
  );
};
export default Hero;
