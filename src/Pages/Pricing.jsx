import ContactSection from "../Component/ContactSection";
import PricingSection from "../Component/PricingSection";

function Pricing() {
  return (
    <div className="lg:px-[14rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
      <p className="mb5">Pricing page</p>
      <PricingSection />
      <ContactSection />
    </div>
  );
}

export default Pricing;
