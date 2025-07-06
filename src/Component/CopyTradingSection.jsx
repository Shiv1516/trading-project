
export default function CopyTradingSection() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-12 lg:px-28 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Copy Trading</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Copy trades from Master Account to multiple Child Accounts with
          multiplier & fixed lot modes. Enjoy seamless, high-speed execution for
          all skill levels. 🚀
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold">
            Start Free Demo
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
            <span>Watch Demo</span>
            <span className="text-red-500">▶</span>
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-xl p-6 md:p-10 max-w-5xl mx-auto mt-10 flex">
        <div>
          <img src="images/whyalgo.webp" alt="whyalgo" className="flex p-4" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Key Features of Copy Trading
          </h3>
          <ul className="space-y-4 text-gray-300 text-base">
            <li>
              <span className="font-semibold text-white">
                Multiplier & Fixed Lot Modes
              </span>{" "}
              – Customize trade sizes for scalability.
            </li>
            <li>
              <span className="font-semibold text-white">
                High-Speed Execution
              </span>{" "}
              – Lightning-fast trade placement for precision.
            </li>
            <li>
              <span className="font-semibold text-white">
                Seamless Integration & Real-Time Sync
              </span>{" "}
              – Instantly updates trades while adapting to all strategies.
            </li>
            <li>
              <span className="font-semibold text-white">
                Cross-Broker Support
              </span>{" "}
              – You can make any broker the master and any broker the child.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
