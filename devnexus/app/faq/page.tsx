"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import animationData from "../../src/assets/FAQ.json";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
}));

const CustomExpandIcon = styled(ArrowForwardIosSharpIcon)(({ theme }) => ({
  color: "#9300ff",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<CustomExpandIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const BoldTypography = styled(Typography)({
  fontWeight: "bold",
  color: "#9300ff",
});

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

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
              FAQ
            </h1>
          </div>
          <div className="flex lgl:px-10">
            <div className="font-roboto text-xl text-white font-bold pt-10 md:text-2xl xl:px-20 xl:text-4xl">
              Welcome to our FAQ page! Here, we have compiled a comprehensive list of frequently
              asked questions to provide you with quick and easy answers to common inquiries about
              our services. Whether you are new to DevNex or a long-time partner, this section aims
              to address any queries you may have regarding our solutions, processes, and how we can
              assist your business in achieving seamless software development and operations.
            </div>
            <div className="hidden lg:block">
              <Lottie animationData={animationData} style={{ width: "300px", height: "300px" }} />
            </div>
          </div>
        </div>
        <div className="font-roboto uppercase font-bold text-6xl pt-52 lgl:px-20">FAQ</div>
        <div className="py-10 px-20">
          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <BoldTypography>What is DevOps, and how can it benefit my business?</BoldTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#000000" }}>
                DevOps is a set of practices that combine software development (Dev) and IT
                operations (Ops) to enhance collaboration and automation in the software development
                lifecycle. By adopting DevOps, your business can benefit from accelerated software
                delivery, improved collaboration between teams, increased deployment frequency,
                enhanced product quality, and faster time-to-market.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <BoldTypography>
                What DevOps tools does DevNex use for continuous integration and deployment?
              </BoldTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#000000" }}>
                At DevNex, we leverage industry-leading DevOps tools such as Jenkins, GitLab CI/CD,
                and CircleCI to implement robust continuous integration and deployment pipelines.
                These tools automate the building, testing, and deployment of your applications,
                ensuring seamless updates and faster feedback loops.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <BoldTypography>Does DevNex offer cloud migration services?</BoldTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#000000" }}>
                Yes, absolutely! DevNex specializes in cloud migration services to help businesses
                smoothly transition their applications to popular cloud platforms like AWS, Azure,
                and Google Cloud. Our experts ensure a secure and efficient migration, allowing you
                to leverage the scalability and cost-saving benefits of cloud infrastructure.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <BoldTypography>
                How does DevNex ensure the security of my applications and data?
              </BoldTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#000000" }}>
                Security is paramount at DevNex. We implement best practices such as secure coding
                standards, access controls, and encryption to safeguard your applications and data.
                Regular security audits and monitoring help us identify and mitigate potential
                vulnerabilities promptly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <BoldTypography>
                Can DevNex help with infrastructure management and automation?
              </BoldTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#000000" }}>
                Absolutely! Our team excels in Infrastructure as Code (IaC) practices, utilizing
                tools like Terraform and Ansible to automate infrastructure provisioning and
                management. This approach streamlines your operations, improves scalability, and
                minimizes manual errors, leading to more efficient resource utilization.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
