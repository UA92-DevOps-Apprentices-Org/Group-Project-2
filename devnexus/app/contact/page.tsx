



export default function Contact() {
    return <>

    <div className="flex place-items-center justify-center w-full p-5">

        <form action={sendEmail} className="max-w-3xl bg-slate-800 rounded-3xl p-10 w-full shadow-xl">
            <h1 className="text-center text-3xl font-bold">Contact Us</h1>
            <p className="leading-tight">You can get a hold of us at any of our socials or by emailing us at contact@devnexus.fake. Alternatively, you can leave us a message via the form below. We aim to respond within 48 hours.</p>
            <p className="mt-2 text-red-400"> For urgent requests contact us via email at urgent@devnexus.fake</p>
            <div className="border-b-[1px] h-1 border-white my-2"></div>
            <h2 className="font-bold my-3 text-lg">Leave us a message:</h2>
            <div className="flex flex-row flex-wrap gap-2">
            <input name="name" required className="p-2 rounded-md block w-full basis-72 grow bg-slate-600" placeholder="Name..." type="text" />
            <input name="email" required className="p-2 rounded-md block w-full basis-72 grow bg-slate-600" placeholder="Email..." type="text" />
            </div>
            <textarea name="content" required className="rounded-md p-2 block mt-2 w-full bg-slate-600 h-32" placeholder="How can we help?"/>
            <button type="submit" className="p-2 bg-purple-600 rounded-md mt-2">Submit</button>

        </form>
    </div>
    
    </>;
}

async function sendEmail(formData: any) {
    'use server'
    console.log(`<-------- New Message from ${formData.get("name")} -------->`)
    console.log(`sender: ${formData.get("email")}`)
    console.log(`message: ${formData.get("content")}`)
    console.log(`//------- EOT -------//`)
    return;
}