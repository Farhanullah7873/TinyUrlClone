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
      const res = await axios.post(
        "https://tinyurlbackend-production.up.railway.app/url/save",
        {
          longUrl: link,
        }
      );
      fetchShortLink(res.data.shortURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="bg-gradient-to-b mt-20 from-[rgb(2,61,92)] via-[rgb(26,97,135)] to-[rgb(66,167,222)] 
  flex flex-col md:flex-row lg:items-center gap-8 lg:gap-20 min-h-screen pt-10 px-4 sm:px-8 lg:px-16 xl:px-24">

  {/* Form Section */}
  <div className="form w-full md:w-1/2 h-100 p-3  lg:mb-40 sm:mb-3  flex justify-center">
    <form
      onSubmit={handleForm}
      className="bg-white w-full max-w-lg lg:max-w-xl p-6 rounded-2xl shadow-xl"
    >
      <p className="flex items-center mb-4 text-gray-700 font-semibold text-lg">
        <svg
          className="fill-green-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="22"
          height="20"
        >
     
        </svg>
        Shorten a long URL
      </p>

      {/* Input */}
      <div className="mt-3">
        <input
          id="longUrl"
          name="longUrl"
          type="text"
          onChange={handleInput}
          placeholder="Enter Long Link Here"
          className="block w-full rounded-md border px-3 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-base"
        />
      </div>

      {/* Shortened Link */}

  <div className="mt-4">
  <label className="block text-sm font-medium text-gray-700">
    Your Short Link
  </label>
<div className="mt-4 relative">
  <label className="block text-sm font-medium text-gray-700">
    Your Short Link
  </label>

  <p
    onClick={(e) => {
      navigator.clipboard.writeText(e.target.innerText);
      
      // create temporary modal
      const modal = document.createElement("div");
      modal.innerText = "Link copied!";
      modal.className = "absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded";
      e.currentTarget.parentNode.appendChild(modal);

      // remove after 1.5s
      setTimeout(() => modal.remove(), 1400);
    }}
    className="block mt-1 border border-amber-950 p-3 text-blue-600 truncate cursor-pointer hover:bg-gray-100"
    title="Click to copy"
  >
   {shortLink}
  </p>
</div>

</div>

  

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 lg:w-90 lg:ms-12 text-white font-bold mt-13 w-full sm:w-80 py-3 px-4 rounded-lg"
      >
        Shorten URL
      </button>
    </form>
  </div>

  {/* Description Section */}
  <div className="description w-full md:w-1/2  text-white p-4">
    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
      The Original URL Shortener
    </h2>
    <p className="pt-4 text-lg">Create shorter URLs with TinyURL.</p>
    <p className="pt-4 max-w-lg sm:max-w-xl lg:max-w-2xl text-base lg:text-lg leading-relaxed">
      Want more out of your link shortener? Track link analytics, use branded domains for fully custom links, and manage your links with our paid plans.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row mt-6 gap-4">
      <button
        onClick={viewPlans}
        className="hover:bg-white hover:text-gray-700 border border-gray-300 text-white font-bold py-3 px-8 rounded-lg"
      >
        View Plans
      </button>
      <button
        onClick={openSignUpDrawer}
        className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg"
      >
        Create Free Account
      </button>
    </div>

    {/* Features */}
    <div className="TinyURLplans mt-6">
      <p className="mb-3 text-lg font-medium">TinyURL plans include:</p>
      <ul className="space-y-3 text-base">
        <li className="flex items-center gap-2"><FaChartLine /> Detailed Link Analytics</li>
        <li className="flex items-center gap-2"><FaGlobe /> Fully Branded Domains</li>
        <li className="flex items-center gap-2"><FaLinkSlash /> Bulk Short URLs</li>
        <li className="flex items-center gap-2"><FaSquareShareNodes /> Link Management Features</li>
      </ul>
    </div>
  </div>
</div>


        <SignUpDrawer open={openSignUp} setOpen={setSignUp} />
      </div>
    </>
  );
};
