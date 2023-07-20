"use client";

export default function Portfolio() {
  return (
    <>
      <div className="h-full py-32 px-10">
        <div>
          <div className="text-center text-6xl sml:text-8xl">
          <h1 style={{
                "textShadow": "0px 4px 15px 0px rgba(0, 0, 0, 0.80)",
                "fontFamily": "Roboto",
                "fontSize": "80px",
                "fontStyle": "normal",
                "fontWeight": "800",
                "lineHeight": "81.687%",
                "letterSpacing": "-1.44px",
                "background": "linear-gradient(0deg, #D5B0F5 0%, #FFF 100%)",
                "backgroundClip": "text",
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent"
        }}>Portfolio</h1>
          </div>
          <div className="flex lgl:px-10 pb-8">
            <div className="font-roboto text-xl text-white font-bold pt-10 md:text-2xl xl:px-20 xl:text-4xl">
            Welcome to our diverse world of talent and innovation! Here at DevNexus, 
            we take pride in our exceptional teams, each of which possesses a unique portfolio of skills and accomplishments. 
            As we embark on this journey, let us introduce you to the brilliance that defines our teams.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-20">
          <Card
            link="#"
            name="Kenan"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            profileImage="/profile-2.PNG"
            skills1="test"
            skills2="test"
            skills3="test"
          />
          <Card
            link="#"
            name="Alex"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            profileImage="/profile-1.PNG"
            skills1="test"
            skills2="test"
            skills3="test"
          />
          <Card
            link="#"
            name="Graham"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            profileImage="/profile-2.PNG"
            skills1="test"
            skills2="test"
            skills3="test"
          />
          <Card
            link="#"
            name="Amaan"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            profileImage="/profile-1.PNG"
            skills1="test"
            skills2="test"
            skills3="test"
          />
          <Card
            link="#"
            name="Luis"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            profileImage="/profile-2.PNG"
            skills1="test"
            skills2="test"
            skills3="test"
          />
          <Card
            link="#"
            name="Nick"
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            profileImage="/profile-1.PNG"
            skills1="test"
            skills2="test"
            skills3="test"
          />
        </div>
        <br />
      </div>
    </>
  );
}

interface Props {
  name: string;
  description: string;
  link: string;
  profileImage: string;
  skills1: string;
  skills2: string;
  skills3: string;
}

const Card = ({ name, description, link, profileImage, skills1, skills2, skills3}: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 rounded-lg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 h-full">
        <div>
          <h2 className="text-5xl text-[#F6F196] font-semibold text-center">
            {name}
          </h2>
          <div className="flex items-center justify-center py-4">
           <img src={profileImage} alt={name} className="profileImg"/>
          </div>
           <p className="text-sm mt-3 text-[#B2BEFF]">
            {description}
           </p>
           <h3 className="text-xl text-[#F6F196] font-semibold pt-4">
            Skills:</h3>
           <ul className="text-sm mt-3 text-[#B2BEFF] list-disc pl-9">
             <li>{skills1}</li>
             <li>{skills2}</li>
             <li>{skills3}</li>
           </ul>
        </div>
      </div>
    </a>
  );
};


