"use client";
import Image from "next/image";
import { FaSearch, FaHandsHelping, FaNetworkWired, FaLightbulb } from "react-icons/fa";
import img8 from "@/assets/discover-img.e37c47c6656e8a5c0043.avif";

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Discover What Sets Communion Events Apart
        </h2>
        <h3 className="text-xl lg:text-2xl text-blue-700 font-semibold mt-2">
          ✨ Who We Are
        </h3>

        {/* Content Section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={img8}
              alt="Community Event"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Features */}
          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Where Creativity Meets Community Impact
            </h3>
            <ul className="space-y-6">
              {[
                {
                  Icon: FaSearch,
                  title: "Expert-Led Sessions",
                  desc: "Learn from professionals who are leaders in their fields.",
                },
                {
                  Icon: FaHandsHelping,
                  title: "Interactive Learning",
                  desc: "Engage in hands-on activities that enhance your skills.",
                },
                {
                  Icon: FaNetworkWired,
                  title: "Networking Opportunities",
                  desc: "Build connections that last beyond the event.",
                },
                {
                  Icon: FaLightbulb,
                  title: "Actionable Insights and Takeaways",
                  desc: "Gain practical knowledge and strategies from every session.",
                },
              ].map(({ Icon, title, desc }, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-gray-700">
                    <Icon size={28} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
