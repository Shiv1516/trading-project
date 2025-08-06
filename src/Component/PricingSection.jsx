import { useState } from "react";

const pricingData = {
  copyTrading: [
    {
      title: "Demo Plan",
      price: "Free",
      duration: "1 Week",
      color: "from-cyan-500 to-teal-500",
      features: [
        "2 Child Account",
        "Free Master Account",
        "Custom Lot Size",
        "Multiple Brokers",
        "24/7 Support",
      ],
    },
    {
      title: "Nano Plan",
      price: "₹ 500",
      duration: "Per Month",
      color: "from-blue-500 to-indigo-500",
      features: [
        "2 Child Account",
        "Free Master Account",
        "Custom Lot Size",
        "Multiple Brokers",
        "24/7 Support",
      ],
    },
    {
      title: "Micro Plan",
      price: "₹ 1000",
      duration: "Per Month",
      color: "from-yellow-400 to-yellow-500",
      features: [
        "5 Child Account",
        "Free Master Account",
        "Custom Lot Size",
        "Multiple Brokers",
        "24/7 Support",
      ],
    },
    {
      title: "Mini Plan",
      price: "₹ 1500",
      duration: "Per Month",
      color: "from-orange-400 to-orange-500",
      features: [
        "10 Child Account",
        "Free Master Account",
        "Custom Lot Size",
        "Multiple Brokers",
        "24/7 Support",
      ],
    },
  ],
  bridge: [
    {
      title: "Starter Bridge",
      price: "₹ 300",
      duration: "Per Month",
      color: "from-pink-500 to-red-500",
      features: [
        "1 Broker Account",
        "Real-time Sync",
        "No Expiry Token",
        "Basic Alerts",
      ],
    },
    {
      title: "Standard Bridge",
      price: "₹ 800",
      duration: "Per Month",
      color: "from-purple-500 to-fuchsia-500",
      features: [
        "3 Broker Accounts",
        "High Speed Sync",
        "Custom Alerts",
        "Auto Restart",
      ],
    },
    {
      title: "Pro Bridge",
      price: "₹ 1300",
      duration: "Per Month",
      color: "from-emerald-500 to-green-600",
      features: [
        "Unlimited Brokers",
        "Smart Filters",
        "Multiple Exchanges",
        "24/7 Bridge Monitoring",
      ],
    },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("copyTrading");

  return (
    <>
      <div className="text-center mb-10 pt-10">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-8 mb-2 text-lg font-semibold">
          <button
            onClick={() => setActiveTab("copyTrading")}
            className={`pb-2 border-b-2 ${
              activeTab === "copyTrading"
                ? "border-orange-500 text-white"
                : "border-transparent text-gray-400"
            } transition`}
          >
            Copy Trading 📋
          </button>
          <button
            onClick={() => setActiveTab("bridge")}
            className={`pb-2 border-b-2 ${
              activeTab === "bridge"
                ? "border-orange-500 text-white"
                : "border-transparent text-gray-400"
            } transition`}
          >
            Bridge 🔗
          </button>
        </div>

        <p className="text-orange-500 mt-2 uppercase text-sm tracking-wide">
          {activeTab === "copyTrading"
            ? "Copy Trading Pricing Plan"
            : "Bridge Pricing Plan"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingData[activeTab].map((plan, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-[#111] flex flex-col justify-between"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${plan.color} p-6 text-center`}>
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold">{plan.price}</p>
              <p className="text-sm text-white/80">{plan.duration}</p>
            </div>

            {/* Features */}
            <div className="p-6 bg-[#000] flex-1 flex flex-col justify-between">
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-full text-sm font-semibold text-black bg-gradient-to-r ${plan.color} hover:opacity-90 transition`}
              >
                Start Free Trial →
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
