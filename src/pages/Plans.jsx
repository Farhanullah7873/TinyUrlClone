import React from "react";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import SignUpDrawer from "../component/Drawer/SignUpDrawer";
import Header from "./component/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaLinkSlash } from "react-icons/fa6";
import { FaSquareShareNodes } from "react-icons/fa6";

export const Plans = () => {
  const openSignUpDrawer = () => {
    setSignUp(true);
  };

  const [openSignUp, setSignUp] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <Header />
      <>
        <div className="h-screen  ">
          <div className="bg-gradient-to-b m-auto container mt-8  ps-2 pe-2   h-screen   pt-19 bg-fixed md:container sm:container ">
            <h2 className="text-4xl font-bold">TinyURL Plans</h2>
            <p className="pt-3 pb-3 text-3xl">
              Find a plan that meets your needs
            </p>
            <div className="toggleBtn flex">
              <p className="text-gray-400">Billing cycle:</p>
              <span className="text-black">Monthly</span>
              <button
                onClick={() => setEnabled(!enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                  enabled ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    enabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <p className="text-black">Annual</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 gap-2">
              <div class=" p-1 border border-gray-200   ">
                <h2 className="text-3xl">Pro</h2>
                <h2 className="text-3xl">$9.99 / mo</h2>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <div class="px-6 py-4">
                    <div class=" text-[14px] text-center mb-2">
                      <p>500 Links with Unlimited Trackable Clicks</p>
                    </div>
                    <p class="text-gray-700 text-[13px]">
                      Get full access to our Pro features including: Link
                      Analytics
                      <ul className="list-disc ps-2">
                        <li> Advanced Link Management Shorten URLs Using</li>
                        <li>
                          Branded Domains Link Editing & Deletion Custom Link
                        </li>
                        <li>
                          Expiration Dates Enjoy 500 links with unlimited clicks
                          and
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div
                    class="px-6 pt-14
                   pb-1"
                  >
                    <button
                      onClick={openSignUpDrawer}
                      class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 w-60 text-center px-4 rounded"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
              <div class=" p-4 border border-gray-200  ">
                <h2 className="text-3xl">Bulk 100K</h2>
                <h2 className="text-3xl">$9.99 / mo</h2>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <div class="px-6 py-4">
                    <div class=" text-[14px] text-center mb-2">
                      <p>500 Links with Unlimited Trackable Clicks</p>
                    </div>
                    <ul className="list-disc ps-2 text-[13px]">
                      <li> Advanced Link Management Shorten URLs Using</li>
                      <li>
                        Branded Domains Link Editing & Deletion Custom Link
                      </li>
                      <li>
                        Expiration Dates Enjoy 500 links with unlimited clicks
                        and
                      </li>
                    </ul>
                  </div>
                  <div class="px-6 pt-13 pb-2">
                    <button
                      onClick={openSignUpDrawer}
                      class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 w-60 text-center px-4 rounded"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
              <div class=" border border-gray-200   p-4">
                <h2 className="text-3xl">Pro</h2>
                <h2 className="text-3xl">$9.99 / mo</h2>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <div class="px-6 py-4">
                    <div class=" text-[14px] text-center mb-2">
                      <p>500 Links with Unlimited Trackable Clicks</p>
                    </div>
                    <ul className="list-disc ps-2 text-[13px]">
                      <li> Advanced Link Management Shorten URLs Using</li>
                      <li>
                        Branded Domains Link Editing & Deletion Custom Link
                      </li>
                      <li>
                        Expiration Dates Enjoy 500 links with unlimited clicks
                        and
                      </li>
                    </ul>
                  </div>
                  <div class="px-6 pt-13 pb-2">
                    <button
                      onClick={openSignUpDrawer}
                      class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 w-60 text-center px-4 rounded"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SignUpDrawer open={openSignUp} setOpen={setSignUp} />
        </div>
      </>
    </div>
  );
};
