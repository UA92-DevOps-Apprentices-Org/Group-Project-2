"use client";
import * as React from "react";
import Card from "@/components/card";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <style jsx>{`
            #title {
            max-width: 70%;
            }

            #test {
                transform-origin: bottom;
                transition: transform 30ms ease-out;            
        `}</style>
      {/* Hero Section */}
      <section className="w-screen h-screen relative">
        <Hero className="bottom-24 inset-6">
          <h1 className="self-center relative font-bold left-10 text-7xl">
            Meet Your Tech Goals
            <br /> with <span>DevNexus</span>
          </h1>
        </Hero>
        <div className="flex absolute bottom-6 left-6 right-6 items-center">
          <h2 className="text-white text-2xl hidden font-semibold md:block">
            Find out why our customers love us{" "}
          </h2>
          <div className="ml-auto h-16 min-w-[24rem] rounded-full bg-slate-800 flex">
            <h2 className="self-center text-center  font-bold w-full text-xl">Read Testimonials</h2>
          </div>
        </div>
      </section>

      {/* Company Tenets section */}
      <section className="min-h-screen flex flex-row justify-items-stretch pt-16 pb-16 flex-wrap place-content-center gap-4 mx-24">
        <h1 className="grow text-7xl font-bold uppercase h-36">
          Our
          <br />
          Tenets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-20">
          <Card
            link="#"
            title="Test"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          />
          <Card
            link="#"
            title="Test"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          />
          <Card
            link="#"
            title="Test"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          />
          <Card
            link="#"
            title="Test"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          />
          <Card
            link="#"
            title="Test"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          />
        </div>
      </section>
      {/* Case Study Testimonial */}
      <section></section>
    </>
  );
}

// JSX = JavaScript Extended
