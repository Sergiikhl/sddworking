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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 px-4 pt-20">
      <Image
        src="/logo.png"
        alt="SDD Shipping Logo"
        width={300}
        height={120}
        className={`mt-[-40px] transition-transform ${animate ? "animate-bounce-1" : ""}`}
      />
        <p className="mt-8 text-lg text-center max-w-2xl">
        SDD Shipping provides reliable and innovative maritime services for global logistics.
      </p>
    </div>
  );
}
