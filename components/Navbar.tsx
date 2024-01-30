import React, { useCallback, useState } from "react";
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import Red from "@/public/images/default-red.png";
import AccountItem from "./AccountItem";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, [setMobileMenu]);

  const toggleAccountMenu = useCallback(()=>{
    setAccountMenu((isOpen)=>!isOpen)
  },[setAccountMenu]);
  return (
    <nav className="w-full fixed z-20">
      <div className="px-4 py-6 flex transition">
        <Image src={Logo} alt="first" width={120} height={24} priority className="lg:h-8" />
        <div className="lg:flex ml-12 items-center hidden gap-7">
          <NavItem name="Home" active></NavItem>
          <NavItem name="Films"></NavItem>
          <NavItem name="Series"></NavItem>
          <NavItem name="New & Popular"></NavItem>
          <NavItem name="My List"></NavItem>
          <NavItem name="Browse My Languages"></NavItem>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="cursor-pointer relative lg:hidden flex items-center gap-2 ml-6 ">
          <p className="text-white">Browse</p>
          <ChevronDownIcon className="w-5 text-white"></ChevronDownIcon>
          <MobileMenu visible={mobileMenu}></MobileMenu>
        </div>
        <div className="flex ml-auto gap-3 items-center">
          <div className="cursor-pointer">
            <MagnifyingGlassIcon className="text-white w-5"></MagnifyingGlassIcon>
          </div>
          <div className="cursor-pointer">
            <BellIcon className="text-white w-5"></BellIcon>
          </div>
          <div onClick={toggleAccountMenu} className="relative cursor-pointer flex ml-auto gap-2 items-center">
            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg overflow-hidden">
              <Image src={Red} alt="ikinci" />
            </div>
            <ChevronDownIcon className="w-5 text-white"></ChevronDownIcon>
            <AccountItem visible={accountMenu}></AccountItem>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
