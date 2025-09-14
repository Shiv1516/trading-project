import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Mohit Bhanvadiya",
    role: "Investment Banker",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
  {
    name: "Anjali Sharma",
    role: "Quant Analyst",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
  {
    name: "Rakesh Mehta",
    role: "Equity Trader",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
  {
    name: "Priya Nair",
    role: "Crypto Strategist",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
  {
    name: "Priya Nair",
    role: "Crypto Strategist",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
  {
    name: "Priya Nair",
    role: "Crypto Strategist",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
  {
    name: "Priya Nair",
    role: "Crypto Strategist",
    text: `Algodelta is our go-to development partner for trading tool development. Their team of experts has helped us create some of the most powerful and innovative tools in the industry. They are reliable, communicative, and always willing to go the extra mile to ensure that our needs are met. Highly recommended!`,
  },
];
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[0px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 text-black rounded-full shadow hover:bg-orange-500 hover:text-white transition"
  >
    <FiArrowLeft className="text-xl" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[0px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 text-black rounded-full shadow hover:bg-orange-500 hover:text-white transition"
  >
    <FiArrowRight className="text-xl" />
  </div>
);

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testmonial py-20  lg:px-[9rem] md:px-[1rem] px-[1rem] sm:px-[1rem]">
      <h4 className="text-orange-500 tracking-wide mb-5 text-center">
        Review/Feedback
      </h4>
      <h2 className="lg:text-5xl md:text-2xl sm:text-2xl text-2xl font-semibold text-center">
        Our Happy Clients
      </h2>

      <div className="mt-10">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3">
              <div className="p-6 h-full rounded-2xl bg-[#4a55656e] border border-gray-400">
                <h3 className="text-2xl font-semibold mb-1">{t.name}</h3>
                <h5 className="text-lg text-gray-400 mb-5">{t.role}</h5>
                <p className="leading-7 text-sm text-white">{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
