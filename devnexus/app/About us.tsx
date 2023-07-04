type Props = {
    className?: String
}

export default function Card({className}: Props) {
    return <>
    <div className={"rounded-3xl bg-slate-500 min-h-[100px] w-fit p-8 "+ className}>
        <h1 className="text-2xl">This is an example header</h1>
        <p>This is the section where we talk about how great we are</p>

    </div>
    </>
}type Props = {
    className?: String
}

export default function Card({className}: Props) {
    return <>
    <div className={"rounded-3xl bg-slate-500 min-h-[100px] w-fit p-8 "+ className}>
        <h1 className="text-2xl">This is an example header</h1>
        <p>This is the section where we talk about how great we are</p>

    </div>
    </>
}