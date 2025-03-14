'use client';
import Image from "next/image";
import img6 from "@/assets/rear-view-female-business-executive-giving-speech.jpg";
import img7 from "@/assets/people-taking-part-high-protocol-event.jpg";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

const Engagements = () => {
    const SecRef = useRef(null);
    const isSecRefInView = useInView(SecRef);
  return (
    <section className="w-full bg-transparent py-16 sm:px-16 container mx-auto">
      <div className="container mx-auto flex flex-col items-center gap-12" ref={SecRef}>

        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold leading-tight">
            More Than <span className="text-blue-500">10,000+</span> Engagements daily<br />
            across the world
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience the power of connection with over 10,000 daily interactions worldwide, uniting
            diverse communities through innovation, collaboration, and shared spirituality.
          </p>
        </div>

        {/* Image & Content Section */}
         <motion.div
              initial={{ y: "200px",opacity:0 }}
              animate={isSecRefInView ? { y: 0, opacity:1} : {}}
              transition={{ duration: 1 }}
              >
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Section */}
          <div className="flex gap-4 sm:gap-6 w-full justify-center">
            {/* Left Capsule Image */}
            <div className="relative w-[45vw] sm:w-[280px] md:w-[320px] h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-[200px]">
              <Image
                src={img6}
                alt="Speaker at Conference"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Capsule Image */}
            <div className="relative w-[45vw] sm:w-[280px] md:w-[320px] h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-[200px]">
              <Image
                src={img7}
                alt="Business Event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 w-full pl-6 sm:pl-0">
            {/* Feature 1 */}
            <div>
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Connectivity</h3>
              <p className="text-gray-600">
                Connect with people worldwide and foster meaningful global engagement.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Foster Inclusive Collaboration</h3>
              <p className="text-gray-600">
                Engage with diverse communities to build meaningful relationships.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
              <p className="text-gray-600">
                Enhance experiences with cutting-edge tools and active participation.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Daily Growth</h3>
              <p className="text-gray-600">
                10,000+ daily engagements foster innovation and spiritual connection.
              </p>
            </div>
          </div>

        </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Engagements;
