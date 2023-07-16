export default function Testimonials() {
    const testimonies = ["epic", "cool", "awesome", "etc", "asdgasdogh"];

    return <>
        <div className="pt-32"></div>
        <div>Testimonials</div>
        <h1>This is testimonial sections</h1>
        <p>Hello I am inserting testimonials here!</p>
        {testimonies.map((testimony) => {
            return Testimony({title: "title",content: testimony});
        })}
        {Testimony({title: "title",content: "testimony"})}
        {Testimony({title: "title",content: "testimony"})}
    </>
}


type TestimonyType = {
    content: String,
    title?: String
}

function Testimony({content, title}: TestimonyType) {
    return <>
        <div className="mt-8 w-1/2 h-1/4 bg-slate-500">
            {(title) && <h1>{title}</h1>}
            {content}
        </div>

    </>
}