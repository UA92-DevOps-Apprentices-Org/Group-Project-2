export default function Services() {
    return <>
    <div className="pt-32"></div>
        <div>
            {Header({title: "hello"})}
        </div>
    </>
}

type Props = {
    title: String
}

function Header({title}: Props) {
    return <>
        <h1>
            {title}
        </h1>
    </>
}