import React from "react";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { useEffect } from "react";
import SignUpDrawer from "../Drawer/SignUpDrawer.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaLinkSlash } from "react-icons/fa6";
import { FaSquareShareNodes } from "react-icons/fa6";
export const HomeBody = () => {
  const [link, setLink] = useState("{}");
  const Navigate = useNavigate();
  const [openSignUp, setSignUp] = useState(false);
  const openSignUpDrawer = (item) => {
    setSignUp(true);
  };
  const viewPlans = () => {
    Navigate("/Plans");
  };

  // Forms Handle
  const [shortLink, fetchShortLink] = useState("");

  function handleInput(e) {
    setLink(e.target.value);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post("https://your-app-production.up.railway.app/url/save", {
  longUrl: link,
});
      fetchShortLink(res.data.shortURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="bg-gradient-to-b     flex flex-colum from-[rgb(2,61,92)] via-[rgb(26,97,135)] to-[rgb(66,167,222)]  gap-5 flex-wrap z-0   bg-[rgb(72,191,255)] h-full  pt-19 bg-fixed">
          <div className="form ">
            {/* <p>{fetchdata}</p> */}
            <form
              onSubmit={handleForm}
              className=" bg-white w-120 h-80 ms-4 p-4 mt-9 rounded-2xl"
            >
              <p className="flex items-center mt-9 ms-4">
                <svg
                  className="fill-green-500 "
                  data-v-da533260=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="18"
                >
                  <path
                    data-v-da533260=""
                    d="M10.27,6.64l2.88-2.88A10,10,0,0,1,24.59,1.35a11.54,11.54,0,0,1,6.05,6.06,10,10,0,0,1-2.4,11.44l-2.88,2.89.07-6.15A5.88,5.88,0,0,0,26.71,9.1,7.48,7.48,0,0,0,22.9,5.29a5.86,5.86,0,0,0-6.48,1.28ZM3.76,13.15,6.3,10.6A3.76,3.76,0,0,0,7.38,13l1.31,1.3-1.9,1.9a5.91,5.91,0,0,0-1.5,6.71A7.48,7.48,0,0,0,9.1,26.71a5.91,5.91,0,0,0,6.71-1.5l1.91-1.91L19,24.61a3.53,3.53,0,0,0,1,.7h0a3.92,3.92,0,0,0,1.16.35l.24,0-2.55,2.55A10,10,0,0,1,7.41,30.65a11.54,11.54,0,0,1-6-6.06A10,10,0,0,1,3.76,13.15Z"
                    className="a"
                  ></path>{" "}
                  <path
                    data-v-da533260=""
                    d="M17,19.21l-3.84,3.9c-2.5,2.54-6.7-1.89-4.27-4.35l3.83-3.9L9.22,11.3a1.07,1.07,0,0,1,0-1.5,1,1,0,0,1,.67-.31l11.35-.12a1,1,0,0,1,1.17,1.21l-.13,11.58a1,1,0,0,1-1.17.91,1.09,1.09,0,0,1-.6-.31Z"
                    className="b"
                  ></path>
                </svg>
                Shorten a long URL
              </p>
              <div className="ms-5  ">
                <div className="w-80 pt-3  justify-center flex-row">
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="longUrl"
                      type="text"
                      onChange={handleInput}
                      placeholder="Enter Long Link Here"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className=" grid grid-cols-2 gap-x-5 mt-4 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Customize your link
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <a
                        className="border w-100"
                        href={shortLink}
                        target="_blank"
                      >
                        {shortLink}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold mt-5 w-80  ms-3 py-2 px-4 rounded"
              >
                Button
              </button>
            </form>
          </div>
          <div className="description w-200 mt-8 text-white h-130 p-4">
            <h2 className="text-4xl font-semibold text-white">
              The Original URL Shortener
            </h2>
            <p className="pt-4">Create shorter URLs with TinyURL.</p>
            <p className="pt-4 w-80">
              Want more out of your link shortener? Track link analytics, use
              branded domains for fully custom links, and manage your links with
              our paid plans.
            </p>
            <div className="flex mt-4 gap-5">
              <button
                onClick={viewPlans}
                className=" hover:bg-white hover:text-gray-400   text-gray-100 border border-gray-400 font-bold py-2 px-7 rounded"
              >
                View Plans
              </button>
              <button
                onClick={openSignUpDrawer}
                className="bg-blue-500 bg-white hover:bg-gray-200 text-gray-400 font-bold py-2 px-7 rounded"
              >
                Create Free Account
              </button>
            </div>
            <div className="TinyURLplans mt-4 ">
              <p className="mt-3">TinyURL plans include:</p>
              <ul className="mt-3  fle">
                <li className="flex items-center justify-between w-47">
                  <FaChartLine /> <span>Detailed Link Analytics</span>
                </li>
                <li className="flex items-center justify-between w-47 ">
                  <FaGlobe /> <span>Fully Branded Domains</span>
                </li>
                <li className="flex items-center justify-between w-35 ">
                  <FaLinkSlash />
                  <span>Bulk Short URLs</span>
                </li>
                <li className="flex items-center justify-between w-54 ">
                  {" "}
                  <FaSquareShareNodes />
                  <span>Link Management Features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <SignUpDrawer open={openSignUp} setOpen={setSignUp} />
      </div>
    </>
  );
};
