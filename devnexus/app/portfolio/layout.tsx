'use client';
import React, { useEffect, useState } from "react";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";

export default function PortfolioLayout({children}:{children: React.ReactNode}) {


    type Page = {
        url: string,
        banner: () => React.JSX.Element,
    }

    const pages: Page[] = [
        {url: "waystar", banner: waystarBanner },
        {url: "kenan-site", banner: kenanBanner },

    ]


    return <>
    <div className="flex flex-col place-items-center justify-center pb-16 px-5">

    {/* Banner Section */}
    <Banner />



    {/* Content Section */}
    <div className="max-w-3xl w-full">
        {children}
    </div>
    </div>
    </>
}

function Banner( ) {

    // set pointer, route to next page. use banner pointer to index urls

    const path = usePathname()
    const router = useRouter();

    const bannerList = [
        {url: "", banner: devNexusBanner },
        {url: "waystar", banner: waystarBanner },
        {url: "kenan-site", banner: kenanBanner },
        {url: "blogNews", banner: blogNewsBanner },
        {url: "nick-site", banner: nickBanner },
        {url: "graham-site", banner: grahamBanner },
        {url: "amaan-site", banner: amaanBanner },

    ]

    const [bannerPointer, setBannerPointer] = useState<number>(0);

    useEffect(()=>{
        // makes sure that if a user visits the page directly then it displays the correct banner
        if (path.slice(11) != bannerList[bannerPointer].url) {
            setBannerPointer(bannerList.findIndex(page => page.url === path.slice(11)))
        }
    },[])

    useEffect(()=> {
        updatePage()
    }, [bannerPointer]);

    function incrementPointer() {
        setBannerPointer((prevPointer) => (prevPointer + 1) % bannerList.length)
    }

    function decrementPointer() {
        setBannerPointer((prevPointer) => Math.abs((prevPointer + bannerList.length - 1) % bannerList.length))
    }

    function updatePage() {
        router.push(`/portfolio/${bannerList[bannerPointer].url}`)
    }

    return <>
    <div className="max-w-3xl bg-black rounded-2xl h-48 w-full mx-5 mb-10 relative">

        {bannerList[bannerPointer].banner()}
        <Image onClick={decrementPointer} className="absolute top-10 left-0 cursor-pointer hover:scale-105 transition-all" width={100} height={100} src={"/arrow.svg"} alt="nothing" />

        <Image onClick={incrementPointer} className="absolute top-10 right-0 rotate-180 cursor-pointer hover:scale-105 transition-all" width={100} height={100} src={"/arrow.svg"} alt="nothing" />

    </div>
    </>
}

const devNexusBanner = () => {
    return basicBanner({title: "devnexus"})
}

const waystarBanner = () => {
    return basicBanner({title: "waystar"})

    return <>
    <div className="absolute inset-0">
        <p>Waystar</p>
    </div>
    </>
}

const kenanBanner = () => {
    return basicBanner({title: "kenan"})
}

const nickBanner = () => {
    return basicBanner({title: "nick"})
}

const grahamBanner = () => {
    return basicBanner({title: "graham"})
}

const amaanBanner = () => {
    return basicBanner({title: "amaan"})
}


const blogNewsBanner = () => {
    return basicBanner({title: "Blog News"})
}

const basicBanner = ({title}:{title: string}) => {
    return <div className="absolute inset-0 flex place-items-center justify-center">
        <h1 className="font-bold text-5xl">{title}</h1>
    </div>
}