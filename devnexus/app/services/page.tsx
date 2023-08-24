"use client";
import Lottie from "lottie-react";
import animationData from "../../src/assets/Services.json";
import Card from "../../components/card";

export default function Services() {
  return (
    <>
      <div className="h-full pt-32 px-10">
        <div>
          <div className="text-center text-6xl sml:text-8xl">
            <h1
              style={{
                textShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.80)",
                fontFamily: "Roboto",
                fontSize: "80px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "81.687%",
                letterSpacing: "-1.44px",
                background: "linear-gradient(0deg, #D5B0F5 0%, #FFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </h1>
          </div>
          <div className="flex lgl:px-10">
            <div className="font-roboto text-xl text-white font-bold pt-10 md:text-2xl xl:px-20 xl:text-4xl">
              With DevNexus, you can relax and enjoy your product development journey. We
              professionally handle every step from project discovery to development and further
              support. We always care for our clients’ projects as if they were ours.
            </div>
            <div className="hidden lg:block">
              <Lottie animationData={animationData} />
            </div>
          </div>
        </div>
        <div className="font-roboto uppercase font-bold text-6xl pt-52 lgl:px-20">
          Our <br />
          Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-20">
          <Card
            link="#"
            title="Web-design"
            description="Looking for a captivating website that engages your audience and drives results? Our expert designers create visually stunning and user-friendly interfaces that blend creativity, functionality, and brand identity seamlessly. Elevate your online presence with our custom web design services that boost conversions and turn visitors into loyal customers. Contact us today to experience professional website development services that drive business growth."
          />
          <Card
            link="#"
            title="Systems architecting"
            description="Unlock the full potential of your digital infrastructure with our systems architecting services. Our skilled architects will meticulously analyze your requirements and design a robust, scalable, and secure system tailored to your unique needs. By optimizing technology integration and ensuring seamless functionality, we'll empower your business to operate efficiently, minimize downtime, and maximize productivity."
          />
          <Card
            link="#"
            title="Consulting"
            description="Stay ahead of the curve with our expert consulting services. Our seasoned consultants bring in-depth industry knowledge and a fresh perspective to help you navigate the complexities of the digital landscape. Whether you need guidance in web development, digital strategy, or technology implementation, we'll provide tailored solutions that drive growth, enhance customer experiences, and achieve your business objectives."
          />
          <Card
            link="#"
            title="Deployment"
            description="Launch your website or application flawlessly into the online realm with our seamless deployment services. Our experienced team will handle all the technical aspects, ensuring smooth server configuration, database setup, and meticulous testing. By taking care of the intricate details, we'll save you time and effort, leaving you with a fully operational digital presence that's ready to captivate your audience."
          />
          <Card
            link="#"
            title="Hosting"
            description="Experience the power of reliable and secure hosting for your website. Our high-performance hosting services guarantee lightning-fast page load times, rock-solid security measures, and exceptional uptime. With flexible plans tailored to your needs, you can enjoy hassle-free website management, robust data backups, and unparalleled customer support. Focus on growing your business while we take care of the technical aspects."
          />
        </div>
        <br />
      </div>
    </>
  );
}

// interface Props {
//   title: string;
//   description: string;
//   link: string;
// }

// const Card = ({ title, description, link }: Props) => {
//   return (
//     <a href={link} target="_blank">
//       <div className="group bg-[#ffff] rounded-lg p-7 flex flex-col justify-center gap-6 hover:bg-[#9300ff] hover:text-white hover:-translate-y-2 transition-transform duration-300 h-full">
//         <div>
//           <h2 className="text-xl text-[#9300ff] font-semibold group-hover:text-white">{title}</h2>
//           <p className="text-sm mt-3 text-[#000000] group-hover:text-white">{description}</p>
//         </div>
//       </div>
//     </a>
//   );
// };
