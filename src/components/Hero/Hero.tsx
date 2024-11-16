import React from "react";
import BackgroundParticles from "@/components/ui/background-particles";
import { Spotlight } from "@/components/ui/Spotlight";
function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[65vh]">
        <Spotlight className="top-[-60px] md:left-0 md:-top-10" fill="white" />
        <BackgroundParticles
          className="absolute inset-0"
          quantity={100}
          ease={40}
          color="#ffffff"
          refresh
        />
        {/* Main Heading */}
        <h1 className="md:highline text-4xl  md:text-8xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Designing the Future of Web
        </h1>

        <h1 className="text-4xl md:text-8xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 ">
          One Pixel at a Time
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-neutral-300 text-center text-lg max-w-xl">
          Crafting stunning, responsive, and user-centric web designs that
          deliver exceptional experiences. Let's shape the web together!
        </p>
      </div>
    </>
  );
}

export default Hero;
