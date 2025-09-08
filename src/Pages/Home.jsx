import ABS from "../Component/ABS";
import Dcwb from "../Component/Dcwb";
import Connect from "../Component/Connect";
import Hero from "../Component/Hero";
import PCF from "../Component/PCF";
import Testimonial from "../Component/Testimonial";
import TTS from "../Component/TTS";
import WhyDcwb from "../Component/WhyDcwb";
import WWI from "../Component/WWI";
import WWR from "../Component/WWR";

function Home() {
  return (
    <div>
      <Hero />
      <WhyDcwb />
      <PCF />
      <Connect />
      <ABS />
      <WWR />
      <Dcwb />
      <WWI />
      <TTS />
      <Testimonial />
    </div>
  );
}

export default Home;
