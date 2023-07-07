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

    const {scrollY} = useScroll();
    const chain = useTransform(scrollY, (value) => {
        const out = 600 - 0.61*value;
        if (out < 50) {
            visibility.set("hidden");
            return 0;
        }
        visibility.set("visible");
        return out;
    })
    const height = useSpring(chain, {stiffness: 1000, damping:10, bounce: 0, mass: 0.01, restDelta: 0.5})

    return <>
    <div id="box" className={className} style={{height: "1000px"}}>
        <motion.div id="top-half" style={{height, willChange, visibility}} className="fixed height-3/4 min-h-96 right-6 left-6 top-6 overflow-hidden bg-slate-800 rounded-[33px] origin-top"/>
        <motion.div id="bottom-half" style={{height, willChange, visibility}} className="rounded-[33px] absolute bottom-6 right-6 left-6 height-3/4 bg-slate-800 origin-bottom"/>
            
        <div id="insert" className="fixed top-6 flex place-items-center">
            {children}
        </div>
    </div>
    </>
}