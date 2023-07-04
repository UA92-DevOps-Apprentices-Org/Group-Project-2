'use client'
import * as React from "react"
import Card from "@/components/card";


export default function Home() {
  
    const [data, setData] = React.useState("");
    const [offset, setOffset] = React.useState(50);

    const handleScroll = (e: Event) => {
        const winOffset = document.body.scrollTop || document.documentElement.scrollTop;
        const height    = document.documentElement.scrollHeight
                        - document.documentElement.clientHeight;
        const scrolled  = winOffset / height;
        setOffset(scrolled);
        console.log("test")
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {window.removeEventListener('scroll', handleScroll)};
    }, []);


    return (
        <>
        <style jsx>{`
            #title {
            max-width: 70%;
            }
            
            .special {
            
            }

            .special:before {
                content:'';
                position: absolute;
                top: ${offset}px;
                bottom: 50px;
                left: 50px;
                right: 50px;
                background-color: red;
            }

            
        `}</style>
        {/* Hero Section */}

        <section className="w-screen h-screen bg-slate-100">
            <div className="special absolute top-6 left-6 right-6 bottom-24 rounded-3xl flex flex-row">
            <h1 id="title" className="self-center relative font-bold left-10 text-7xl">Meet Your Tech Goals<br/> with <span>DevNexus</span></h1>
            </div>
            <div className="flex absolute bottom-6 left-6 right-6 items-center">
            <h2 className="text-black text-2xl hidden font-semibold md:block">Find out why our customers love us </h2>
            <div className="ml-auto h-16 min-w-[24rem] rounded-full bg-slate-800 flex">
                <h2 className="self-center text-center  font-bold w-full text-xl">Read Testimonials</h2>
            </div>
            </div>
        </section>

        {/* Company Tenets section */}
        <section className="min-h-screen flex flex-row justify-items-stretch pt-16 pb-16 flex-wrap place-content-center gap-4 mx-24">
            <h1 className="grow text-7xl font-bold uppercase h-36">Our<br />Tenets</h1><div className="h-0 basis-full"></div>
            <Card className="" title="this is a test heading" content="This is a test content" />
            <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!!" />
            <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!!" />
            <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!!" />
            <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!" />
            <Card className="" title="I'm a box! Help!" content="This is some example content tnetnoc elpmaxe emos si siht!" />
        </section>
        {/* Case Study Testimonial */}
        <section>




        </section>

        </>
  )
}

// JSX = JavaScript Extended

