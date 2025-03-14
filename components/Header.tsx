"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logocommunion.0485ada0760e4748313f.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); 

  // Function to handle scrolling or redirection
  const handleScroll = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80; 
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header className="py-4 px-8 sticky top-0 z-30 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={Logo} alt="HomeVista Logo" width={165} height={165} />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-600">
          <Link href="/" 
          className="relative text-gray-600 hover:!text-black hover:cursor-pointer transition-all duration-300 ease-in-out 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black 
          after:transition-all after:duration-300 hover:after:w-full"
        >
           Home
        </Link>
        <button
          onClick={() => handleScroll("about")}
          className="relative text-gray-600 hover:!text-black hover:cursor-pointer transition-all duration-300 ease-in-out 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black 
        after:transition-all after:duration-300 hover:after:w-full"
      
        >
          About
        </button>
        <Link href="/Eventpage" 
        className="relative text-gray-600 hover:!text-black hover:cursor-pointer transition-all duration-300 ease-in-out 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black 
        after:transition-all after:duration-300 hover:after:w-full"
      >
           Events
         </Link>
         <button
           onClick={() => handleScroll("faq")}
           className="relative text-gray-600 hover:!text-black hover:cursor-pointer transition-all duration-300 ease-in-out 
         after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black 
         after:transition-all after:duration-300 hover:after:w-full"
      
         >
           FAQ
         </button>
      </nav>


        {/* Right Section: Join Us */}
        <div className="flex items-center space-x-6">
          <Link href="/signup">
            <button className="hidden hover:cursor-pointer md:flex px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
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
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <span className="py-2 text-gray-800">Home</span>
          </Link>
          <button onClick={() => { handleScroll("about"); setIsMenuOpen(false); }} className="py-2 text-gray-800">
            About
          </button>
          <Link href="/Eventpage" onClick={() => setIsMenuOpen(false)}>
            <span className="py-2 text-gray-800">Events</span>
          </Link>
          <button onClick={() => { handleScroll("faq"); setIsMenuOpen(false); }} className="py-2 text-gray-800">
            FAQ
          </button>
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