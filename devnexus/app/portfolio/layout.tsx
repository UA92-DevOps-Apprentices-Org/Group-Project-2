'use client';
import React, { useState } from "react";
import {usePathname} from "next/navigation";

export default function PortfolioLayout({children}:{children: React.ReactNode}) {

    const path = usePathname()

    type Page = {
        url: string,
        banner: () => React.JSX.Element,
    }

    const pages: Page[] = [
        {url: "waystar", banner: waystarBanner },
        {url: "kenan-site", banner: kenanBanner },

    ]


    return <>
    <div className="left-0 right-0 absolute top-32 flex flex-col place-items-center justify-center">

    {/* Banner Section */}
    <div className="max-w-3xl bg-black rounded-2xl h-48 w-full mx-5 mb-10 relative">
    {pages.map((page) => <>
        {page.banner()}
    </>)}
    </div>


    {/* Content Section */}
    <div className="max-w-prose w-full">
        {children}
    </div>
    </div>
    </>
}

function Banner( ) {

    const bannerList = [
        {url: "waystar", banner: waystarBanner },
        {url: "kenan-site", banner: kenanBanner },
    ]

    const [bannerPointer, setBannerPointer] = useState<number>(0);

    function incrementPointer() {
        setBannerPointer((prevPointer) => prevPointer + 1)
    }

    function decrementPointer() {
        setBannerPointer((prevPointer) => prevPointer - 1)
    }


    return <>
    
    </>
}


const waystarBanner = () => {
    return <>
    <div className="absolute inset-0">
        <p>Waystar</p>
    </div>
    </>
}

const kenanBanner = () => {
    return basicBanner({title: "kenan"})
}

const basicBanner = ({title}:{title: string}) => {
    return <div className="absolute inset-0 flex place-items-center justify-center">
        <h1 className="font-bold text-5xl">{title}</h1>
    </div>
}