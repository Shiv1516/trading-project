import { useState } from "react";
import {
  FaShoppingCart,
  FaTelegramPlane,
  FaFileExcel,
  FaChartBar,
} from "react-icons/fa";

const services = [
  {
    key: "backTesting",
    title: "Back Testing",
    icon: <FaChartBar />,
    description: `Backtesting plays a vital role in building a successful trading strategy. It enables traders and analysts to evaluate the potential of a strategy by analyzing its performance against historical market data. AlgoDelta offers a professional backtesting service that helps traders validate their strategies before moving to live trading. With comprehensive backtesting, traders can build confidence in their approach and make smarter decisions about investing time and capital. AlgoDelta’s service uses detailed historical data to simulate trades and generates in-depth reports covering profit and loss, win rate, drawdowns, and other critical metrics. Backtesting with AlgoDelta empowers traders to fine-tune their strategies and significantly improve their chances of success in the competitive trading world.`,
    tags: [
      "Historical Data",
      "Optimization",
      "Risk Management",
      "Performance Analysis",
      "Confidence",
      "Time-Saving",
      "Strategy Refinement",
    ],
  },
  {
    key: "strategyAutomation",
    title: "Strategy Automation",
    icon: <FaShoppingCart />,
    description:
      "Automate your trading strategies to eliminate manual work, reduce errors, and increase efficiency in execution.",
    tags: ["Speed", "Reliability", "Automation Logic"],
  },
  {
    key: "telegramAutomation",
    title: "Telegram Automation",
    icon: <FaTelegramPlane />,
    description:
      "Integrate your trades with Telegram to send and receive signals or trade alerts in real-time.",
    tags: ["Notifications", "Real-Time", "Custom Triggers"],
  },
  {
    key: "excelAutomation",
    title: "Excel Automation",
    icon: <FaFileExcel />,
    description:
      "Automatically import/export and analyze trading data in Excel using dynamic scripts.",
    tags: ["Spreadsheet Power", "Auto Export", "Live Sync"],
  },
];

export default function ServiceSection() {
  const [selected, setSelected] = useState("backTesting");
  const activeService = services.find((s) => s.key === selected);

  return (
    <section className="lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
      <p className="text-orange-500 mb-2 text-sm">— We Work In</p>
      <h2 className="text-4xl font-bold mb-10">Our Other Services</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {services.map((service) => (
            <button
              key={service.key}
              onClick={() => setSelected(service.key)}
              className={`flex items-center justify-between px-5 py-3 rounded-md font-medium transition-all ${
                selected === service.key
                  ? "bg-orange-500 text-white"
                  : "bg-[#1c1c1c] hover:bg-[#2a2a2a]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span>{service.icon}</span>
                <span>{service.title}</span>
              </div>
              <span>→</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4">{activeService.title}</h3>
          <p className="text-gray-600 mb-6">{activeService.description}</p>
          <div className="flex flex-wrap gap-3">
            {activeService.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#2a2a2a] rounded-md px-4 py-2 text-sm text-gray-200"
              >
                ○ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
