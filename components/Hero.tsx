import React from "react";
import Link from "next/link";
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
      <section
        id="hero"
        className="bg-white h-[80vh] flex flex-col items-center justify-between text-center w-screen relative overflow-hidden"
      >
        {/* Hero Content */}
        <div className="mt-32 flex flex-col items-center px-4 sm:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Home Is Where <br className="hidden md:block" /> Your Story Begins.
          </h1>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Unlock Your Dream Home. Explore Endless Possibilities with{" "}
            <span className="text-blue-500">HomeVista</span> – Your Premier Real
            Estate Destination.
          </p>

          <Link href="/properties">
            <button className="mt-8 bg-blue-500 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all">
              Find Properties
            </button>
          </Link>

          {/* Statistics Section - Mobile (Below Button) */}
          <div className="flex justify-center gap-8 mt-8 sm:hidden">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">408+</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">4.9</p>
              <p className="text-gray-600 text-sm">Customer Ratings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">323+</p>
              <p className="text-gray-600 text-sm">Awards Winning</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">30+</p>
              <p className="text-gray-600 text-sm">Property Ready</p>
            </div>
          </div>

          {/* Statistics Section - Desktop (Side Positions) */}
          <div className="hidden sm:block absolute top-38 left-76 space-y-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">408+</p>
              <p className="text-gray-600 text-[20px]">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">4.9</p>
              <p className="text-gray-600 text-[20px]">Customer Ratings</p>
            </div>
          </div>

          <div className="hidden sm:block absolute top-38 right-76 space-y-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">323+</p>
              <p className="text-gray-600 text-[20px]">Awards Winning</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">30+</p>
              <p className="text-gray-600 text-[20px]">Property Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Collage Section */}
      <section>
      <div className="absolute flex justify-between items-end -bottom-10 left-0 w-screen">
         {/* Mobile View: 3 Images with Tilt and Out-of-Screen */}
         <div className="sm:hidden flex justify-between w-screen">
          {/* Left Image */}
          <div className="w-64 h-64 rounded-lg transform -rotate-12 -ml-10 shadow-lg overflow-hidden z-10 border-4 border-white grayscale">
            <img src={img3.src} alt="House 3" className="w-full h-full object-cover" />
          </div>

          {/* Center Image */}
          <div className="w-72 h-72 rounded-lg transform scale-125 rotate-6 shadow-xl overflow-hidden z-20 border-4 border-white">
            <img src={img4.src} alt="House 4" className="w-full h-full object-cover" />
          </div>

          {/* Right Image */}
          <div className="w-64 h-64 rounded-lg transform rotate-12 -mr-10 shadow-lg overflow-hidden z-10 border-4 border-white grayscale">
            <img src={img5.src} alt="House 5" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop View: Your Original 7 Images */}
        {/* Image Collage Section */}
<div className="hidden sm:flex absolute  justify-between items-end -bottom-10 left-0 w-screen">

{/* Leftmost Image (Slightly Outside Screen) */}
<div className="w-72 h-72 rounded-lg transform -rotate-12 -ml-14 shadow-lg overflow-hidden z-0 border-4 border-white grayscale">
  <img src={img1.src} alt="House 1" className="w-full h-full object-cover" />
</div>

{/* Left Image */}
<div className="w-68 h-68 rounded-lg transform rotate-6 -ml-1 shadow-lg overflow-hidden z-10 border-4 border-white grayscale">
  <img src={img2.src} alt="House 2" className="w-full h-full object-cover" />
</div>

{/* Slightly Left of Center */}
<div className="w-72 h-72 rounded-lg transform -rotate-6 -ml-1 shadow-lg overflow-hidden z-20 border-4 border-white grayscale">
  <img src={img3.src} alt="House 3" className="w-full h-full object-cover" />
</div>

{/* Center Image (Larger, Colored & Prominent) */}
<div className="w-78 h-78 rounded-lg transform scale-125 rotate-12 shadow-xl overflow-hidden z-30 border-4 border-white">
  <img src={img4.src} alt="House 4" className="w-full h-full object-cover" />
</div>

{/* Slightly Right of Center */}
<div className="w-72 h-72 rounded-lg transform -rotate-4 -mr-1 shadow-lg overflow-hidden z-20 border-4 border-white grayscale">
  <img src={img5.src} alt="House 5" className="w-full h-full object-cover" />
</div>

{/* Right Image */}
<div className="w-68 h-68 rounded-lg transform rotate-12 -mr-1 shadow-lg overflow-hidden z-10 border-4 border-white grayscale">
  <img src={img6.src} alt="House 6" className="w-full h-full object-cover" />
</div>

{/* Rightmost Image (Slightly Outside Screen) */}
<div className="w-72 h-72 rounded-lg transform -rotate-12 -mr-14 shadow-lg overflow-hidden z-0 border-4 border-white grayscale">
  <img src={img7.src} alt="House 7" className="w-full h-full object-cover" />
</div>

</div>
      </div>
      </section>

      {/* Footer Section */}
      <section>
      <div className="bg-black text-white py-16 w-full mt-40 flex flex-col sm:flex-row items-center justify-between px-8 sm:px-16 h-[40vh]">
        {/* Left Text Block */}
        <div className="mb-8 sm:mb-0">
          <h2 className="text-4xl sm:text-5xl font-bold leading-snug">
            Dwelling <br /> Achievements
          </h2>
        </div>

        {/* Right Description Block */}
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
