import React from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
export const Myurl = ({ open, setOpen,  }) => {
  return (
      <div>
            
            {/* ======================dial for Url ============ */}
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
                         Your recent TinyURLs
                          </DialogTitle>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          <button className="bg-white-500 text-black border-1 border-blue-500  hover:bg-blue-400 hover:text-white  font-bold py-1 px-4 w-100 rounded-b-md">
                            Get Full Details Stats
                          </button>
                          <p className="text-center">
                            No recent URLs in your history
                          </p>
                        </div>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>

  )
}
