"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="mt-20 md:mt-0 p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Transform Your Business <br /> with Expert Solutions
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Delivering innovative strategies and cutting-edge technology solutions
          that drive growth and maximize your business potential.
        </p>
      </div>
    </div>
  );
}
