"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "@/assets/Logocommunion.0485ada0760e4748313f.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F1115] text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Left Section - Brand & Description */}
          <div className="max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image src={logo} alt="Communion Logo" />
            </div>
            <p className="text-gray-400">
              Discover the power of connection with Communion. Uniting diverse
              communities through spirituality and innovation, we foster inclusivity,
              collaboration, and social cohesion for a better world.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaFacebookF />
              </Link>
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaTwitter />
              </Link>
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaInstagram />
              </Link>
              <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">Communities</Link></li>
              <li><Link href="#" className="hover:text-white">Events</Link></li>
              <li><Link href="#" className="hover:text-white">Leaders</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
              <li><Link href="#" className="hover:text-white">Profile</Link></li>
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-400">contact@communionhub.org</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>Copyright © 2024. All rights reserved to Communion</p>
          <div className="mt-2 space-x-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
