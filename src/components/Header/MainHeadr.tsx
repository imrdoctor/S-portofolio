"use client";
import { useState, useEffect } from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "vaul";
import React from "react";
import Image from "next/image";
import avatar from "@/app/assets/photo.png"
function MainHeadr() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto sm:px-[10%] z-auto">
      <div
        className={`flex justify-between items-center p-2 px-4 my-2 rounded-[100px] transition-all duration-300 ${
          isBlurred ? "backdrop-blur-lg bg-[#3c3c494d] shadow-lg" : "background-transparent"
        }`}
      >
        {" "}
        <div className="flex text-white items-center justify-between w-full">
          <div className="flex flex-row items-center gap-3">
            <Image src={avatar} alt="profile"   className="w-10 h-10 rounded-full shadow-[0_0_0_1.5px_#7777ef]"  />
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold">Mohamed</h1>
              <p className="text-gray-400">FullStack Devloper</p>
            </div>
          

          </div>
          <div className="gap-4 hidden sm:flex">
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Notifications</a>
          </div>
        </div>

        <Drawer.Root modal={false}>
          <Drawer.Trigger className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#161615] text-white">
            <span className="text-xl">☰</span>
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 sm:hidden " />
            <Drawer.Content className="backdrop-blur-lg bg-[#16161ee0] z-[9999999999] shadow-lg flex flex-col rounded-t-[30px] mt-24 h-fit fixed bottom-0 left-0 right-0 sm:hidden">
              <div className="p-4 ">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#282832] mb-8 " />
                <div className="w-full ">
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832]  hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon className="text-lg" icon={faHouse} />
                      <span className="text-base font-medium">Home</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon
                        className="text-lg"
                        icon={faMagnifyingGlass}
                      />
                      <span className="text-base font-medium">Explore</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon className="text-lg" icon={faBell} />
                      <span className="text-base font-medium">
                        Notifications
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon className="text-lg" icon={faEnvelope} />
                      <span className="text-base font-medium">Messages</span>
                    </div>
                  </a>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
}

export default MainHeadr;
