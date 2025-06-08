// pages/index.js
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 pt-24 px-4">
      <div className="flex flex-col items-center justify-start">
        <Image
          src="/logo.png"
          alt="SDD Shipping Logo"
          width={300}
          height={120}
          className={`mb-6 transition-transform ${animate ? "animate-bounce-1" : ""}`}
        />
        <p className="max-w-2xl text-center text-lg sm:text-xl leading-relaxed">
          SDD Shipping is a maritime services company. Established with a forward-looking vision,
          we are dedicated to comprehensively addressing the evolving needs of the modern maritime
          industry and facilitating global trade in the present and anticipated future market landscapes.
          With years of industry experience, SDD Shipping embodies a wealth of collective insight
          and operates on a proven, dependable system.
        </p>
      </div>
    </div>
  );
}
