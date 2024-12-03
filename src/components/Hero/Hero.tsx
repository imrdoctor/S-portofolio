import React, { useState, useEffect } from "react";
import BackgroundParticles from "@/components/ui/background-particles";
import { Spotlight } from "@/components/ui/Spotlight";
import Global from "@/components/Global/Global";

function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 h-[65vh]">
        <Spotlight className="top-[-60px] md:left-0 md:-top-10" fill="white" />
        <BackgroundParticles
          className="absolute inset-0"
          quantity={100}
          ease={40}
          color="#ffffff"
          refresh
        />
        <div className="container mx-auto px-4  mb-36">
          <div className="container mx-auto px-4">
            <h1
              className="text-4xl z sm:text-5xl md:text-6xl overflow-visible h-[111px] lg:text-7xl xl:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200  leading-snug sm:leading-normal md:leading-relaxed "
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
      </div>
        <Global />
    </>
  );
}

export default Hero;
