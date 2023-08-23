'use client';
import React from "react";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useWillChange,
} from "framer-motion";

type Props = {
    children?: React.ReactNode,
    className?: string,
}

export default function Hero({ children, className }: Props) {
    //declarations
    const visibility = useMotionValue("visible");
    const willChange = useWillChange();

    const {scrollY, scrollYProgress} = useScroll();

    // Div Height Transforms
    const chain = useTransform(scrollY, (value) => {
        const out = 600 - 0.60*value;
        if (out < 20) {
            visibility.set("hidden");
            return 0;
        }
        visibility.set("visible");
        return out;
    })
    const height = useSpring(chain, {stiffness: 1000, damping:10, bounce: 0, mass: 0.01, restDelta: 0.5})

    // Opacity Transforms
    const opacityChain = useTransform(scrollYProgress, [0,0.2], [1,0])

    return <>
    <div id="box" className={className} style={{ position: "absolute", }}>
        <motion.div id="top-half" style={{
            height, 
            willChange, 
            visibility, 
            background: "url(/hero.png)", 
            backgroundAttachment: "fixed", 
            backgroundSize: "cover", 
            backgroundPositionX: "center", 
            backgroundPositionY: "bottom",
            boxShadow: `0px 10px 10px 0px rgba(0,0,0,0.5)`
            }} className="fixed height-3/4 min-h-96 right-6 left-6 top-6 overflow-hidden bg-slate-800 rounded-[33px] origin-top"/>
        <motion.div id="bottom-half" style={{
            height, 
            willChange, 
            visibility, 
            background: "url(/hero.png)", 
            backgroundAttachment: "fixed", 
            backgroundSize: "cover", 
            backgroundPositionX: "center", 
            backgroundPositionY: "bottom",
            boxShadow: `0px 10px 10px 0px rgba(0,0,0,0.5)`
            }} className="rounded-[33px] right-0 left-0 bottom-0 absolute height-3/4 bg-slate-800 origin-bottom"/>
            
        <motion.div id="insert" style={{opacity: opacityChain}} className="h-full w-full fixed flex place-items-center">
            {children}
        </motion.div>
    </div>
    </>
}