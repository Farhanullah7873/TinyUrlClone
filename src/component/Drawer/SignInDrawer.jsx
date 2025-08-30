// Drawer.jsx
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";

import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useState } from "react";

export default function SignInDrawer({ open, setOpen,  setSignUpOpen }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");


 function openDrawer1() {
   setSignUpOpen(true)
    setOpen(false); 
    
     
}

  return (
    <>
      <div>
        <Dialog open={open} onClose={setOpen} className="relative z-1000">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Sign In
                      </DialogTitle>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="relative mt-6 flex-1 px-4 border-t border-blue-300 sm:px-6">
                        <h2 className="text-center text-[rgb(9,128,161)] text-3xl font-weight-500 font-bold">
                          TINYURL
                        </h2>

                        <p className="text-center font-weight-100">
                          Welcome to TinyURL
                        </p>

                        <form>
                          <div className="space-y-10">
                            <div className="border-b  pb-12"></div>

                            <div className="border-b border-gray-900/10 pb-12">
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-900"
                                  >
                                    Email address
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      autoComplete="family-name"
                                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-900"
                                  >
                                    Password
                                  </label>
                                  <div className="mt-2 relative">
                                    <input
                                      id="password"
                                      name="password"
                                      type={showPassword ? "text" : "password"}
                                      autoComplete="current-password"
                                      value={password}
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                      placeholder="Enter password"
                                      className="block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-indigo-600 focus:outline-none"
                                    >
                                      {showPassword ? (
                                        <AiOutlineEyeInvisible className="h-5 w-5" />
                                      ) : (
                                        <AiOutlineEye className="h-5 w-5" />
                                      )}
                                    </button>
                                  </div>
                                </div>

                                <p className="sm:col-span-3">
                                  By clicking on “Create Account”, I agree to
                                  the{" "}
                                  <a
                                    className="underline text-blue-500"
                                    href=""
                                  >
                                    Terms of Service, Privacy Policy,
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    className="underline text-blue-500"
                                    href=""
                                  >
                                    Use of Cookies
                                  </a>
                                  .
                                </p>

                                <div className="mt-0  items-center gap-x-2">
                                  <button
                                    type="submit"
                                    className="rounded-md bg-[#0980a1] flex justify-center items-center gap-1 text-center px-3  py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#085e76] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-90"
                                  >
                                    <FaSignInAlt /> Create An Account
                                  </button>
                                </div>

                                <p className="sm:col-span-3 text-center  ">
                                  Already A User ?
                                  <button
                                    className="text-[#0980a1] cursor-pointer"
                                    onClick={() => openDrawer1()}
                                  >
                                  Sign Up
                                  </button>
                                </p>
                                <p className="sm:col-span-3 text-center ">
                                  Already Have An Account ?
                                </p>
                                <ul className="flex sm:col-span-3 justify-center gap-5  ">
                                  <li className="bg-[#0980a1] text-white p-4 rounded-[12px]">
                                    <FaFacebookF />
                                  </li>
                                  <li className="bg-[#0980a1] text-white p-4 rounded-[12px]">
                                    <FaGoogle />
                                  </li>
                                  <li className="bg-[#0980a1] text-white p-4 rounded-[12px]">
                                    <FaXTwitter />{" "}
                                  </li>
                                  <li className="bg-[#0980a1] text-white p-4 rounded-[12px]">
                                    <FaMicrosoft />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      {/* <SignUpDrawer open={open} setOpen={setOpen}/> */}
  
    </>
  );
}
