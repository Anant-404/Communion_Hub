'use client';
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/male-business-executive-giving-speech.jpg";
import img2 from "@/assets/people-taking-part-high-protocol-event (1).jpg";
import img3 from "@/assets/confident-woman-holding-presentation.jpg";
import img4 from "@/assets/person-holding-speech-official-event.jpg";
import img5 from "@/assets/portrait-elegant-professional-businessman-speaking-conference.jpg";
import {motion} from "framer-motion";


const Hero = () => {
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative  w-full overflow-hidden  bg-transparent">
      <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      >

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-20 sm:pt-32">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-4xl lg:text-7xl lg:ml-8">
            Connect Communities, <br className="hidden md:block" /> Build Meaningful Bonds.
            </h1>

           <p className="mt-4 max-w-sm md:max-w-xs lg:max-w-xl text-sm md:text-base lg:text-lg text-gray-600">
                Connecting people of all faiths through events and community support
           </p>


           <button className="hover:cursor-pointer mt-8 rounded-full bg-blue-500 px-8 py-4 text-lg text-white transition-all hover:bg-blue-600">
              <Link href="/Eventpage">
              
                Explore Events
                </Link>
           </button>

            {/* Statistics Grid - Mobile */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:hidden">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">408+</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">4.9</p>
                <p className="text-sm text-gray-600">Ratings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">600+</p>
                <p className="text-sm text-gray-600">Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">30+</p>
                <p className="text-sm text-gray-600">Events</p>
              </div>
            </div>
            

            {/* Statistics - Desktop */}
            <div className="hidden sm:block">
              <div className="absolute left-4 top-8 space-y-8 lg:left-16">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">408+</p>
                  <p className="text-xl text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">4.9</p>
                  <p className="text-xl text-gray-600"> Ratings</p>
                </div>
              </div>

              <div className="absolute right-4 top-8 space-y-8 lg:right-16">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">600+</p>
                  <p className="text-xl text-gray-600">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">30+</p>
                  <p className="text-xl text-gray-600">Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* Image Collage Section */}
       <div className="relative w-full h-fit overflow-hidden">
         <div className="flex justify-center items-center mt-10 flex-wrap sm:flex-nowrap gap-1 md:gap-2 lg:gap-2">
           {/* Image 1 */}
           <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-[-8deg]">
             <Image src={img1} alt="img1" layout="fill" objectFit="cover" />
           </div>
       
           {/* Image 2 */}
           <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-2 -ml-3 md:-ml-4">
             <Image src={img2} alt="img2" layout="fill" objectFit="cover" />
           </div>
       
           {/* Image 3 */}
           <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-[8deg] -ml-3 md:-ml-4">
             <Image src={img3} alt="img3" layout="fill" objectFit="cover" />
           </div>
       
           {/* Image 4 (shown only on small screens and above) */}
           <div className="hidden sm:block relative w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-[-4deg] -ml-3 md:-ml-4">
             <Image src={img4} alt="img4" layout="fill" objectFit="cover" />
           </div>
       
           {/* Image 5 (shown only on large screens) */}
           <div className="hidden lg:block relative w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 overflow-hidden rounded-xl border-4 border-gray-200 rotate-6 -ml-3 md:-ml-4">
             <Image src={img5} alt="img5" layout="fill" objectFit="cover" />
           </div>
         </div>
       </div>
      </motion.div>
      </section>

      {/* about */}
      <section id="about" className="w-full bg-black px-4 py-16 text-white mt-16 sm:mt-12 sm:px-16 ">
       
         <div className="container mx-auto grid gap-8 lg:grid-cols-2 items-center">
           {/* Left Section (Text Content) */}
           <div className="lg:pr-12">
             <h2 className="text-4xl font-bold leading-snug sm:text-5xl mb-6" >
               Why Communion Rocks! 
             </h2>
             <p className="max-w-xl text-lg leading-relaxed mb-8">
               Communion is not just another platform—it&apos;s a vibrant space that unites
               diverse faiths, beliefs, and traditions. By promoting collaboration and
               connection, we&apos;re fostering a world where differences become strengths
               and unity becomes the norm.
             </p>
             <button className="mt-4 text-white flex items-center gap-2 hover:underline">
                 Why Join Us? <span>→</span>
             </button>
           </div>

           {/* Right Section (Feature Cards) */}
         
           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {/* Card 1 */}
             <div className="bg-[#1A1A1A] rounded-xl p-6 text-center hover:scale-105 transition-transform lg:h-[380px] xl:h-[420px] flex flex-col justify-between">
               <div>
                 <div className="mb-4 text-4xl">👥</div>
                 <h3 className="text-xl font-semibold mb-2">Unifying Communities</h3>
                 <p className="text-sm mb-4">
                 Communion bridges diverse religious communities, becoming the social
                 </p>
               </div>
               <button className="mt-4 border border-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black">
                 Learn More <span>→</span>
               </button>
             </div>
       
             {/* Card 2 */}
             <div className="bg-[#1A1A1A] rounded-xl p-6 text-center hover:scale-105 transition-transform lg:h-[380px] xl:h-[420px] flex flex-col justify-between">
               <div>
                 <div className="mb-4 text-4xl">🔬</div>
                 <h3 className="text-xl font-semibold mb-2">Innovative and Fun</h3>
                 <p className="text-sm mb-4">
                   Experience faith in a fresh way through our interactive features,
                   engaging events, and modern approach.
                 </p>
               </div>
               <button className="border border-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black">
                 Learn More <span>→</span>
               </button>
             </div>
       
             {/* Card 3 */}
             <div className="bg-[#1A1A1A] rounded-xl p-6 text-center hover:scale-105 transition-transform lg:h-[380px] xl:h-[420px] flex flex-col justify-between">
               <div>
                 <div className="mb-4 text-4xl">📊</div>
                 <h3 className="text-xl font-semibold mb-2">Promoting Unity</h3>
                 <p className="text-sm mb-4">
                   We foster understanding and harmony between different faith
                   communities.
                 </p>
               </div>
               <button className="border border-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black">
                 Learn More <span>→</span>
               </button>
             </div>
           </div>
    
         </div>
         
         
      </section>
    </>
  );
};

export default Hero;