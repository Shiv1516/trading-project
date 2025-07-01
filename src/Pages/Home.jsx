import ABS from "../Component/ABS";
import Hero from "../Component/Hero";
import PCF from "../Component/PCF";
import Testimonial from "../Component/Testimonial";
import TTS from "../Component/TTS";
import WhyAlgo from "../Component/WhyAlgo";
import WWI from "../Component/WWI";
import WWR from "../Component/WWR";

function Home() {
  return (
    <div>
      <Hero />
      <WhyAlgo />
      <PCF />
      <ABS />
      <WWR />
      <WWI />
      <TTS />
      <Testimonial />
    </div>
  );
}

export default Home;
