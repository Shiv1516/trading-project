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
        <div className="lg:w-[40%] md:w-full sm:w-full flex justify-center flex-col items-center m-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-14 text-center">
            India's Best Copy Trading Software
          </h2>
          <p className="leading-8 text-xl mb-4 text-center">
            Place an order in your master account, and it will be copied to all
            child accounts instantly. No matter where you place the order,
            broker's website, mobile app, or any algo trading software. That's
            why AlgoDelta is India’s top #1 choice for copy trading, built for
            Indian traders with bank-level data security.
          </p>
          <Link
            className="flex items-center uppercase bg-orange-600 px-6 py-3 text-xl rounded-full font-medium"
            to="/"
          >
            Login
            <FaArrowTrendUp className="ml-2" />
          </Link>
        </div>
      </div>
      <h4 className="text-lg font-medium text-center pb-6">
        All Brokers Supported
        <div className="mt-6 px-4 w-[60%] m-auto">
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
