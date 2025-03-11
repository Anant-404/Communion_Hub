'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/male-business-executive-giving-speech.jpg";
import img2 from "@/assets/people-taking-part-high-protocol-event (1).jpg";
import img3 from "@/assets/confident-woman-holding-presentation.jpg";
import img4 from "@/assets/person-holding-speech-official-event.jpg";
import img5 from "@/assets/portrait-elegant-professional-businessman-speaking-conference.jpg";
import img6 from "@/assets/rear-view-female-business-executive-giving-speech.jpg";
import img7 from "@/assets/people-taking-part-high-protocol-event.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative  w-full overflow-hidden  bg-transparent">

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-20 sm:pt-32">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl lg:text-7xl">
              Home Is Where <br className="hidden md:block" /> Your Story Begins.
            </h1>

           <p className="mt-4 max-w-sm md:max-w-xs lg:max-w-xl text-sm md:text-base lg:text-lg text-gray-600">
                 Unlock Your Dream Home. Explore Endless Possibilities with{" "}
               <span className="text-blue-500">HomeVista</span> – Your Premier Real Estate Destination.
           </p>


            <Link href="/properties">
              <button className="mt-8 rounded-full bg-blue-500 px-8 py-4 text-lg text-white transition-all hover:bg-blue-600">
                Find Properties
              </button>
            </Link>

            {/* Statistics Grid - Mobile */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:hidden">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">408+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">4.9</p>
                <p className="text-sm text-gray-600">Customer Ratings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">323+</p>
                <p className="text-sm text-gray-600">Awards Winning</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">30+</p>
                <p className="text-sm text-gray-600">Property Ready</p>
              </div>
            </div>
            

            {/* Statistics - Desktop */}
            <div className="hidden sm:block">
              <div className="absolute left-4 top-8 space-y-8 lg:left-16">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">408+</p>
                  <p className="text-xl text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">4.9</p>
                  <p className="text-xl text-gray-600">Customer Ratings</p>
                </div>
              </div>

              <div className="absolute right-4 top-8 space-y-8 lg:right-16">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">323+</p>
                  <p className="text-xl text-gray-600">Awards Winning</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">30+</p>
                  <p className="text-xl text-gray-600">Property Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* Image Collage Section */}
       <div className="relative w-full h-fit overflow-hidden">
  <div className="flex justify-center items-center mt-10 flex-wrap relative gap-0">
    {/* Image 1 */}
    <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-[-8deg]">
      <Image src={img1} alt="img1" layout="fill" objectFit="cover" />
    </div>

    {/* Image 2 */}
    <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-2 -ml-6 sm:-ml-4">
      <Image src={img2} alt="img2" layout="fill" objectFit="cover" />
    </div>

    {/* Image 3 */}
    <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-[8deg] -ml-6 sm:-ml-4">
      <Image src={img3} alt="img3" layout="fill" objectFit="cover" />
    </div>

    {/* Image 4 (Hidden on small screens) */}
    <div className="hidden sm:block relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-[-4deg] -ml-4">
      <Image src={img4} alt="img4" layout="fill" objectFit="cover" />
    </div>

    {/* Image 5 (Visible only on large screens) */}
    <div className="hidden lg:block relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-6 -ml-4">
      <Image src={img5} alt="img5" layout="fill" objectFit="cover" />
    </div>
  </div>
</div>
      </section>

      {/* Footer Section */}
      <section className=" w-full bg-black px-4 py-16 text-white mt-8 sm:mt-12 sm:px-16">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <h2 className="text-4xl font-bold leading-snug sm:text-5xl">
              Dwelling <br /> Achievements
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed">
            Discover Your Perfect Home and Begin Your Story:{" "}
            <span className="text-blue-400">HomeVista</span> – Where Every Dream
            Finds Its Place, Every Journey Begins, and Every Achievement Shines
            Bright. The Promise of Home Becomes Reality, Each Moment Becomes a
            Memory, and Every Achievement.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;