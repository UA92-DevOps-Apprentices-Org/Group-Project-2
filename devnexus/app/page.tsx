'use client'
import * as React from "react"
import Card from "@/components/card";

export default function Home() {
  
  const [data, setData] = React.useState("");
  

  return (
    <>
    <div className="w-screen h-screen bg-slate-100">
    <div className="absolute top-6 left-6 right-6 bottom-24 bg-slate-800 rounded-3xl flex flex-row">
      <h1 className="self-center relative left-10 text-7xl h-16">Meet Your Tech Goals<br/> with <span>DevNexus</span></h1>
    </div>
    <div className="absolute bottom-6 right-6 h-16 min-w-[24rem] rounded-full bg-slate-800 flex">
      <h2 className="self-center text-center w-full text-xl">Read Testimonials</h2>
    </div>
    </div>
    <div className="h-screen flex flex-row justify-items-stretch flex-wrap place-content-center gap-4 mx-24">
    <h1 className="grow text-7xl o-36">Our<br />Tenets</h1><div className="h-0 basis-full"></div>
    <Card className="" title="this is a test heading" content="This is a test content" />
    <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!!" />
    <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!!" />
    <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!!" />
    <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!" />
    <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!" />
    </div>

    </>
  )
}

// JSX = JavaScript Extended

