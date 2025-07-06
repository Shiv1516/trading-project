import ContactSection from "../Component/ContactSection";
import PricingSection from "../Component/PricingSection";

function Pricing() {
  return (
    <div className="px-4 md:px-10 lg:px-[14rem] py-10">
      <p className="mb5">Pricing page</p>
      <PricingSection />
      <ContactSection />
    </div>
  );
}

export default Pricing;
