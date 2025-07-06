import ABS from "../Component/ABS";
import Connect from "../Component/Connect";
import CopyTradingSection from "../Component/CopyTradingSection";
import SimpleStep from "../Component/SimpleStep";

function Products() {
  return (
    <div>
      <div>
        <CopyTradingSection />
        <SimpleStep />
        <ABS />
        <Connect />
      </div>
    </div>
  );
}

export default Products;
