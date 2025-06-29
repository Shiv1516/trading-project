import Hero from "../Component/Hero";
import PCF from "../Component/PCF";
import Testimonial from "../Component/Testimonial";
import TTS from "../Component/TTS";
import WhyAlgo from "../Component/WhyAlgo";
import WWI from "../Component/WWI";

function Home() {
  return (
    <div>
      <p>Home page ...............</p>
      <Hero/>
      <WhyAlgo />
      <PCF />
      <WWI />
      <TTS />
      <Testimonial />
    </div>
  );
}

export default Home;
