import React from "react";
import BackgroundParticles from "@/components/ui/background-particles";
import { Spotlight } from "@/components/ui/Spotlight";
import Global from "@/components/Global/Global";

function Hero() {
  return (
    <>
    <div>
    <BackgroundParticles
          className="absolute inset-0"
          quantity={100}
          ease={40}
          color="#ffffff"
          refresh
        />
    <Spotlight className="top-[-60px] md:left-0 md:-top-10" fill="white" />
    </div>
      <div className="flex flex-col items-center justify-center gap-6 h-[65vh] relative ">
        <div className="container mx-auto px-4  mb-36">
          <div className="container mx-auto px-4">
            <h1
              className="h-[75px] text-2xl z sm:text-3xl md:text-5xl overflow-visible md:h-[111px] lg:h-[130px] lg:text-6xl xl:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200  leading-snug sm:leading-normal md:leading-relaxed "
            >
              Designing the Future of Web
            </h1>
            <h1
              className="text-3xl z-10 relative sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-300  mt-4 leading-snug sm:leading-normal md:leading-relaxed "
            >
              One Pixel at a Time
            </h1>
          </div>
        </div>
        
        <Global />
      </div>
    </>
  );
}

export default Hero;