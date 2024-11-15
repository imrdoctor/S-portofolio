'use client';

import { faHouse, faMagnifyingGlass, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from 'vaul';
import React from 'react';

function MainHeadr() {
  return (
    <div className="container px-4 mx-auto sm:px-[10%]">
      <div className='flex justify-between bg-red-950 py-5 px-4 my-2 rounded-[100px] items-center'>
        <div className='flex gap-4'>
          <div>logo</div>
          <div className='gap-2 hidden sm:flex'>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Notifications</a>
          </div>
        </div>
        <div className='hidden sm:flex gap-4'>
          <div className="">
            language
          </div>
          <div className="">
            contact
          </div>
        </div>

        <Drawer.Root modal={false}>
          <Drawer.Trigger className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#161615] text-white">
            <span className="text-xl">☰</span>
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 sm:hidden" />
            <Drawer.Content className="bg-[#16161e] flex flex-col rounded-t-[30px] mt-24 h-fit fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-[#16161e] rounded-t-[50px] sm:hidden">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#282832] mb-8" />
                <div className="w-full">
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon className="text-lg" icon={faHouse} />
                      <span className="text-base font-medium">Home</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon className="text-lg" icon={faMagnifyingGlass} />
                      <span className="text-base font-medium">Explore</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                      <FontAwesomeIcon className="text-lg" icon={faBell} />
                      <span className="text-base font-medium">Notifications</span>
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