interface Props {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: Props) {
  return (
    <a href={link} target="_blank">
      <div className="group bg-[#ffff] rounded-lg p-7 flex flex-col justify-center gap-6 hover:bg-[#9300ff] hover:text-white hover:-translate-y-2 transition-transform duration-300 h-full">
        <div>
          <h2 className="text-xl text-[#9300ff] font-semibold group-hover:text-white">{title}</h2>
          <p className="text-sm mt-3 text-[#000000] group-hover:text-white">{description}</p>
        </div>
      </div>
    </a>
  );
}
// type Props = {
//     className?: String,
//     title: String,
//     content: String
// }

// export default function Card({className, title, content}: Props) {
//     return <>
//     <style jsx> {`
//         div {
//             flex: 1;
//         }
//         `}
//     </style>
//     <div className={"rounded-3xl bg-slate-500 min-w-[400px] min-h-[100px] p-8 "+ className}>
//         <h1 className="text-2xl">{title}</h1>
//         <p>{content}</p>

//     </div>
//     </>
// }
