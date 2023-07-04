
type Props = {
    className?: String,
    title: String,
    content: String
}

export default function Card({className, title, content}: Props) {
    return <>
    <style jsx> {`
        div {
            flex: 1;
        }
        `}
    </style>
    <div className={"rounded-3xl bg-slate-500 min-w-[400px] min-h-[100px] p-8 "+ className}>
        <h1 className="text-2xl">{title}</h1>
        <p>{content}</p>

    </div>
    </>
}