import ABS from "../Component/ABS";
import Connect from "../Component/Connect";
import CopyTradingSection from "../Component/CopyTradingSection";
import SimpleStep from "../Component/SimpleStep";

function CopyTrading() {
  return (
    <div>
      <CopyTradingSection />
      <SimpleStep />
      <ABS />
      <Connect />
    </div>
  );
}

export default CopyTrading;
