import Image from "next/image";

export default function Page() {
    return <>
        <h1 className="font-bold text-2xl">Waystar</h1>
        <p>Lorem Ipsum, dolor sit amet</p>
        <TextWithImage
            title="Demo Title"
            content="Example Content"
            url=""/>
        <TextWithRightImage
            title="Demo Title"
            content="Example Content"
            url=""/>
    
    </>;
}

function TextWithImage({title, content, url}:{title: string, content: string, url: string}) {
    return <>
    <div className="flex w-full gap-5 border-t-2 mt-4 pt-4">
        <Image alt="Image accompanying text" src={url} />
        <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{content}</p>
        </div>
    </div>
    
    </>
}

function TextWithRightImage({title, content, url}:{title: string, content: string, url: string}) {
    return <>
    <div className="flex w-full gap-5 border-t-2 mt-4 pt-4">
        <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{content}</p>
        </div>
        <Image className="ml-auto" alt="Image accompanying text" src={url} />
    </div>
    
    </>
}