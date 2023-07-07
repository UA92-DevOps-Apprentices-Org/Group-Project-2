// useLayoutEffect alternative
'use client';
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, useWillChange } from "framer-motion";

export default function Test() {

    const visibile = useMotionValue("visible");
    
    const willChange = useWillChange();
    const {scrollY, scrollYProgress} = useScroll();
    const scaleX = useTransform(scrollY,(value) => {
        const out = 600-0.61*value;
        if (out < 50) {
            visibile.set("hidden");
            return 0;
        }
        visibile.set("visible")
        return(out)
    })
    const scaleY = useSpring(scaleX, {stiffness: 200, damping: 100, bounce: 0, mass: 0.1, restDelta: 0.5})

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log(latest);

    // })

    return <>
    <motion.div style={{height: scaleY, willChange, visibility: visibile}} className="fixed height-3/4 min-h-96 right-6 left-6 top-6 overflow-hidden origin-top">
        <div id="other" className="absolute inset-0 bg-red-500 rounded-[33px]"></div>
    </motion.div>
    <motion.div id="test" style={{height: scaleY, willChange}} className="rounded-[33px] absolute bottom-6 right-6 left-6 height-3/4 bg-slate-800 origin-bottom">
        
    </motion.div>
    <div className="h-[4000px]"></div>
    </>
}
