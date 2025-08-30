import { useState } from "react";
import { FaQuestion } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import SignUpDrawer from "./Drawer/SignUpDrawer.JSX";
import { Myurl } from "./Drawer/Myurl";
import { useNavigate } from "react-router";

import SignInDrawer from "./Drawer/SignInDrawer.jsx";
// import SignalIcon from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
// import { XMarkIcon } from '@heroicons/react/24/outline'
import { HomeBody } from "./bodyComponent/homeBody.jsx";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
function Header() {
  const navigate = useNavigate();
  // ==========================================states=============
  const [open, setOpen] = useState(false);
  const [openSignUp, setSignUp] = useState(false);
  const [openSignIn, setSignIn] = useState(false);
  const [isquestion, setQuestion] = useState(false);

  //======================= Navigation Array=====================
  const navigation = [
    { name: "My URLs", href: "#", current: true },
    { name: "Plans", href: "#", current: false },
    {
      name: "Blogs",
      href: "https://tinyurl.com/blog/",
      current: false,
    },
    {
      name: `Features`,
      current: false,
      icon: <VscTriangleDown />,
      children: [
        { name: "LinkManagement", href: "#" },
        {
          name: "Branded",
          href: "",
        },
      ],
    },
    { name: "SignUp", href: "#", current: false },
    { name: "SignIn", href: "#", current: false },
    { name: "?", href: "#", current: false },
  ];
  // ===============================Navigation Array End========================================
  // ==========================Show Help Menu start==========================
  const showQuestion = () => {
    setQuestion(true);
  };
  const hidQuestion = () => {
    setQuestion(false);
  };
  // ==========================Show Help Menu end==========================

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // ==========================Open drawer Function Start==========================
  const openDrawer = (item) => {
    if (item.name == "My URLs") {
      setOpen(true);
    } else if (item.name == "SignUp") {
      setSignUp(true);
    } else if (item.name == "SignIn") {
      setSignIn(true);
    } else if (item) {
      navigate(`/${item.name}`);
    }
  };
  const HomePage = () => {
    navigate("/");
  };
  // ==========================Open drawer Function End==========================

  return (
    <>
      <div className="bg-[rgb(2,62,92)]  h-20 z-1000     fixed top-0 left-0 w-[100%]  ">
        <Disclosure
          as="nav"
          className="relative   h-19  pt-1.5 items-center justify-content: space-around;"
        >
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton
                  // onClick={() => openDrawr("My")}
                  className="group relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-9 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex w-20 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 w-10 items-center text-white font-bold text-2xl">
                  <p onClick={HomePage}>TINYURL</p>
                </div>
              </div>

              <div className="question-mark  relative">
                <div
                  onMouseOver={showQuestion}
                  onMouseLeave={hidQuestion}
                  className="p-2 rounded-full bg-[#087da8] hover:bg-[#5ad7f4] hover:text-white  text-white hidden lg:block"
                >
                  <FaQuestion />
                  {isquestion && (
                    <div className="isquestion absolute mt-2.5 rounded-[12px] p-1.5 -right-2 bg-[#4eb1cd]">
                      Help
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden sm:ml-12  h-10 font-bold  text-2xl  sm:block">
                <div className="flex space-x-4 w-full h-10 color-white bg-[#087da8]">
                  {navigation.map((item) => {
                    if (item.children) {
                      // Dropdown menu
                      return (
                        <Menu
                          as="div"
                          key={item.name}
                          className="relative inline-block text-left"
                        >
                          <MenuButton className="rounded-md px-3 py-2 text-sm font-medium flex    text-white hover:bg-[#6ac1d5]">
                            <span> {item.name}</span>
                            <span className="mt-1">{item.icon} </span>
                          </MenuButton>
                          <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-md shadow-lg ring-1 hover:bg-[#27ead3]  focus:outline-none ">
                            {item.children.map((subItem) => (
                              <MenuItem key={subItem.name}>
                                {({ active }) => (
                                  <a
                                    onClick={() => openDrawer(subItem)}
                                    href={subItem.href}
                                    className={`block px-4 bg-white hover:bg-[#57b5d7] py-2 text-sm ${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {subItem.name}
                                  </a>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      );
                    } else {
                      // Normal menu link
                      return (
                        <a
                          onClick={() => openDrawer(item)}
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.name === "?" ? " lg:hidden" : "",
                            item.current
                              ? "text-white hover:bg-[#6ac1d5] hover:text-white"
                              : "text-white hover:bg-[#6ac1d5] hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 bg-[#087da8] h-400 z-0 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.children ? (
                  // 📂 Dropdown for Features
                  <Disclosure key={item.name} as="div" className="space-y-1 ">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#6ac1d5]">
                          {item.name}
                          <ChevronDownIcon
                            className={`ml-2 h-5 w-5 transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="space-y-1 pl-5">
                          {item.children.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => openDrawer(subItem)}
                              className="block rounded-md px-3 py-2 text-sm font-medium  text-white hover:bg-[#27ead3]"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    onClick={() => openDrawer(item)}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#6ac1d5]"
                  >
                    {item.name}
                  </DisclosureButton>
                )
              )}
            </div>
          </DisclosurePanel>
        </Disclosure>
        {/* My url  */}
        <Myurl open={open} setOpen={setOpen} />
        {/* ======================Sign Up Wrapper start ============ */}
        <SignUpDrawer
          open={openSignUp}
          setOpen={setSignUp}
          setSignInOpen={setSignIn}
        />
        {/* ======================Sign Up Wrapper end============ */}

        {/* ======================Sign In Wrapper start ============ */}
        <SignInDrawer
          open={openSignIn}
          setOpen={setSignIn}
          setSignUpOpen={setSignUp}
        />
        {/* ======================Sign In Wrapper end============ */}
        {/* <HomeBody className="overflow-scroll"></HomeBody> */}
      </div>
    </>
  );
}

export default Header;
