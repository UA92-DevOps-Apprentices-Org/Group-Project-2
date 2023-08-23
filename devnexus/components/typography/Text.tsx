
export default function Text({title, content}:{title: string, content: string}) {
    return <>
    <div className="flex w-full gap-5 border-t-2 mt-4 pt-4">
        <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{content}</p>
        </div>
    </div>
    
    </>
}