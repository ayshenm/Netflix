import React from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import NavItem from "./NavItem";

function Navbar() {
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
        <div className="lg:hidden flex items-center gap-2 ml-6 ">
            <p className="text-white">Browse</p>
            <ChevronDownIcon className="w-5 text-white"></ChevronDownIcon>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
