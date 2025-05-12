import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import "./AiChat.css"
import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";


export default function AiChat() {
  return (
    <div className="sticky bottom-0  cursor-pointer bg-[var(--faint-color)]">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-sm font-medium  focus:outline-none focus-visible:ring-none cursor-pointer">
            <div className="text-[var(--main-color)] flex items-center absolute right-5 bottom-5">
              <div className="border-4 border-[#620c2266]  rounded-full puls ">
                <div className="border-[3px] border-[#620c2296] rounded-full p-1">
                  <IoChatbubbleEllipses className="text-xl" />
                </div>
              </div>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-[-280px] bottom-[50px] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className=" min-h-[150px] rounded-md">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <div className="center bg-[var(--main-color)] text-white  rounded-tl-md rounded-tr-md">
                      <h4 className="text-[10px] w-full p-1 ">
                        Open Channel IVORY TRAINING & CONSULTING
                      </h4>

                      {/* <span
                      onClick={}
                      >x</span> */}
                    </div>
                    <span className="text-gray-400 ms-2">------</span>
                  </div>
                  //
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
