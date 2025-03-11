'use client'
import Engagements from "@/components/Engagements";
import FAQSection from "@/components/FAQ";
import Hero from "@/components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      const lerpFactor = 0.1;
      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      document.body.style.setProperty("--mouse-x", `${currentX}px`);
      document.body.style.setProperty("--mouse-y", `${currentY}px`);

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      
    };
  }, []);
  return (
    <>
     <div>
     <div className="fixed inset-0 bg-gradient-mouse"></div>
      <Hero/>
      <Engagements/>
      <FAQSection/>
      
     </div>
     
     </>
  );
}
