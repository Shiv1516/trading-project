import ContactSection from "../Component/ContactSection";
import PricingSection from "../Component/PricingSection";

function Pricing() {
  return (
    <>
      <div className="bg-[#1a1a1a] text-white py-16 text-center">
        <div className="text-sm text-gray-400 mb-4">
          <span className="text-white">Home</span>{" "}
          <span className="mx-2">•</span>{" "}
          <span className="text-orange-500">Pricing</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Choose a Plan That Works For You
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Looking for a copy trading solution that fits your needs? AlgoDelta
          offers a range of plans to choose from, whether you're an experienced
          trader or just starting out. Our user-friendly platform and expert
          support team make it easy to get started with copy trading and start
          seeing results. Choose a plan that works for you and take your trading
          to the next level with AlgoDelta.
        </p>
      </div>

      <div className="lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
        <PricingSection />
        <ContactSection />
      </div>
    </>
  );
}

export default Pricing;
