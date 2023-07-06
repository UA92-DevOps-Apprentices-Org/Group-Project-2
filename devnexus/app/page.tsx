'use client'
import * as React from "react"
import Card from "@/components/card";


export default function Home() {
    //TODO: This code needs to be configured to run in a webworker of somekind to get rid of delays in the main thread \
    //      This should help solve some of the performance issues and visual bugs.
    const divRef = React.useRef<HTMLDivElement | null>(null);
    const [trackingID, setTrackingID] = React.useState<number | null>(null);

    const stopTracking = () => {if(trackingID) cancelAnimationFrame(trackingID);}

    React.useEffect(() => {
        const track = () => {
            const start = Date.now();
            
            function bind() {
                let winOffset = document.body.scrollTop || document.documentElement.scrollTop;
                let scaleFactor = (1-(winOffset / 850));
                if(divRef.current) {
                    divRef.current.style.visibility = (scaleFactor <= 0) ? "hidden" : "visible";
                    divRef.current.style.transform = `scaleY(${ scaleFactor } )`
                }
                setTrackingID(requestAnimationFrame(bind));
            }

            requestAnimationFrame(bind);

        }
        track();
    }, []);

    return (
        <>
        <style jsx>{`
            #title {
            max-width: 70%;
            }

            #test {
                transform-origin: bottom;
            }
        `}</style>
        {/* Hero Section */}
        <div onClick={stopTracking} className="fixed top-0 left-0 bg-red-500 w-[400px]">
            {"test"}
        </div>
        <section className="w-screen h-screen bg-slate-100">
            <div id="test" ref={divRef} className="absolute left-6 bottom-24 right-6 h-[850px] bg-slate-800 rounded-3xl">

            </div>
            <div id="special"className="hidden absolute overflow-hidden left-6 right-6 bottom-24 bg-slate-800 rounded-3xl flex flex-row">
                <h1 className="self-center relative font-bold left-10 text-7xl">Meet Your Tech Goals<br/> with <span>DevNexus</span></h1>
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

