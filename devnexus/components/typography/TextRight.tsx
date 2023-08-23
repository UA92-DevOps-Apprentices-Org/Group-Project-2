import Image from "next/image"

export default function TextRight({title, content, url}:{title: string, content: string, url: string}) {
    return <>
    <div className="flex flex-col md:flex-row w-full gap-5 border-t-2 mt-4 pt-4">
    <img className="w-auto h-min max-w-xs" width={100} height={100} alt="Image accompanying text" src={url} />
        <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{content}</p>
        </div>
    </div>
    
    </>
}