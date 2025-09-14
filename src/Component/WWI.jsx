function WWI() {
  const strategies = [
    {
      title: "Option-Based Strategies",
      icon: "images/wwi-icons-1.png",
    },
    {
      title: "Price Action Strategies",
      icon: "images/wwi-icons-2.png",
    },
    {
      title: "Fundamental Strategies",
      icon: "images/wwi-icons-3.png",
    },
    {
      title: "Quantitative Strategies",
      icon: "images/wwi-icons-4.png",
    },
    {
      title: "Swing Trading Strategies",
      icon: "images/wwi-icons-5.png",
    },
    {
      title: "Day Trading Strategies",
      icon: "images/wwi-icons-6.svg",
    },
    {
      title: "Options Spread Strategies",
      icon: "images/wwi-icons-7.png",
    },
    {
      title: "Trend Following Strategies",
      icon: "images/wwi-icons-8.svg",
    },
    {
      title: "Mean Reversion Strategies",
      icon: "images/wwi-icons-9.png",
    },
    {
      title: "Options Volatility Strategies",
      icon: "images/wwi-icons-10.png",
    },
    {
      title: "Position Trading Strategies",
      icon: "images/wwi-icons-11.png",
    },
    {
      title: "Pair Trading Strategies",
      icon: "images/wwi-icons-12.png",
    },
  ];

  return (
    <div className="wwi-bg py-30">
      <div className="wwi-section relative z-10 lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-4 lmt-20">
        <h4 className="flex text-orange-500 text-base items-center tracking-wide mb-5">
          <span className="w-4 h-0.5 mr-3 bg-orange-500"></span>We Work In
        </h4>
        <h2 className="lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-semibold max-w-3xl leading-snug">
          Types of Algo Trading Strategies We Develop
        </h2>

        <div className="flex flex-wrap gap-4 mt-5">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="flex items-center border border-gray-700 rounded-full p-2 lg:w-[24%] md:w-[48%] sm:w-full w-full"
            >
              <div className="bg-white p-3 rounded-full">
                <img src={strategy.icon} alt={strategy.title} className="w-8" />
              </div>
              <p className="text-base md:text-lg font-semibold px-4">
                {strategy.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WWI;
