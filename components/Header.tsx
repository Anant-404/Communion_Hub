"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logocommunion.0485ada0760e4748313f.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-8 sticky top-0 z-30 bg-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={Logo} alt="HomeVista Logo" width={165} height={165} />
            {/* <span className="text-lg font-semibold text-gray-800">HomeVista</span> */}
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-600">
          {["Home", "Overview", "Gallery", "Features", "Realtor"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <span className="hover:text-black cursor-pointer transition">{item}</span>
            </Link>
          ))}
        </nav>

        {/* Right Section: Login & Sign Up */}
        <div className="flex items-center space-x-6 ">
          <Link href="/signup">
            <button className=" hidden md:flex px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
              Join Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-white shadow-md">
          {["Home", "Overview", "Gallery", "Features", "Realtor"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
              <span className="py-2 text-gray-800">{item}</span>
            </Link>
          ))}
          <Link href="/signup">
            <button className="mt-2 px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
              Join Us
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
