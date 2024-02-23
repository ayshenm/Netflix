import React, { useCallback, useEffect, useState } from "react";
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "public/images/logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Red from "public/images/default-red.png";
import AccountItem from "./AccountItem";
import NavItem from "./NavItem";
import Language from "./Language";
import { useRouter } from "next/router";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const [showBackMovie, setShowBack] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const topOffset = 65;

  useEffect(() => {
    const handlerScroll = () => {
      window.scrollY >= topOffset ? setShowBack(true) : setShowBack(false);
    };

    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, [setMobileMenu]);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((isOpen) => !isOpen);
  }, [setAccountMenu]);

  const router = useRouter();
  const userRegister = useCallback(() => {
    router.push("/auth");
  }, [router]);

  return (
    <nav className="w-full  fixed z-20">
      <div
        className={`px-4 py-6 max-sm:py-3 flex transition ${
          showBackMovie ? "bg-zinc-900" : "bg-zinc-950 bg-opacity-95"
        } `}>
        {currentPath !== "/" && (
          <Image src={Logo} alt="first" width={120} height={24} priority className="lg:h-8" />
        )}
        {currentPath === "/" && (
          <div className="flex justify-around items-center gap-2  container  max-sm:gap-10 ">
            <div>
              <Image src={Logo} alt="first" width={120} height={24} priority className="lg:h-8" />
            </div>

            {/* <div className="flex justify-center items-center gap-2 md:w-[40%] max-sm:w-1/2 sm:w-[50%] lg:w-[20%] ">
              <div className="w-1/2">
                <Language />
              </div>

              <div className="w-1/2 bg-green-400 sm:w-1/2">
                <button
                  onClick={userRegister}
                  className="bg-red-700 py-2 text-white hover:bg-red-800 transition rounded-md w-full ">
                  Sign In
                </button>
              </div>
            </div> */}
            <div className="flex justify-center gap-2 items-center w-auto    max-sm:w-full ">
              
                <Language />
             
             
                <button
                  onClick={userRegister}
                  className="bg-red-700 py-2 text-white hover:bg-red-800 transition rounded-md w-20">
                  Sign In
                </button>
              
            </div>
          </div>
        )}
        {currentPath !== "/" && (
          <div
            onClick={toggleMobileMenu}
            className="cursor-pointer relative lg:hidden flex items-center gap-2 ml-6 md:hidden">
            <p className="text-white">Browse</p>
            <ChevronDownIcon className="w-5 text-white"></ChevronDownIcon>
            <MobileMenu visible={mobileMenu}></MobileMenu>
          </div>
        )}
        {currentPath === "/movie" && (
          <>
            <div className="hidden md:flex">
              <div className="flex ml-12 items-center overflow-hidden gap-7 ">
                <NavItem name="Home" active></NavItem>
                <NavItem name="Films"></NavItem>
                <NavItem name="Series"></NavItem>
                <NavItem name="New & Popular"></NavItem>
                <NavItem name="My List"></NavItem>
              </div>
            </div>

            <div className="flex ml-auto gap-3 items-center">
              <div className="cursor-pointer">
                <MagnifyingGlassIcon className="text-white w-5"></MagnifyingGlassIcon>
              </div>
              <div className="cursor-pointer">
                <BellIcon className="text-white w-5"></BellIcon>
              </div>
              <div
                onClick={toggleAccountMenu}
                className="relative cursor-pointer flex ml-auto gap-2 items-center">
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg overflow-hidden">
                  <Image src={Red} alt="ikinci" />
                </div>
                <ChevronDownIcon className="w-5 text-white"></ChevronDownIcon>
                <AccountItem visible={accountMenu}></AccountItem>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
