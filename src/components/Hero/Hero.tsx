import React from 'react'
import BackgroundParticles from "@/components/ui/background-particles";
import { Spotlight } from '@/components/ui/Spotlight';
function Hero() {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-0 md:-top-10"
        fill="white"
      />
    <BackgroundParticles
    className="absolute inset-0"
    quantity={100}
    ease={40}
    color="#ffffff"
    refresh
  />

    </div>


  )
}

export default Hero