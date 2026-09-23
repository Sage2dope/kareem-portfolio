import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Unitedsea.org",
    imgSrc: "project-imgs/unitedsea.png",
    projectLink: "https://unitedsea.org/#problems",
    tech: ["Typescript", "React", "Node", "Postgres", "Blockchain", "Smart Contracts"],
    description:
      "Unitedsea is a decentralized maritime trade platform aiming to revolutionize global shipping by leveraging blockchain technology to enhance trade documents in maritime logistics.",
    modalContent: (
      <>
        <p>
          Unitedsea is a decentralized maritime trade platform aiming to
          revolutionize global shipping by leveraging blockchain technology to
          enhance trade documents in maritime logistics.
        </p>
      </>
    ),
  },
  {
    title: "EE TV Assist",
    imgSrc: "project-imgs/EE-TV-Assist.png",
    tech: ["TypeScript", "Linux", "Docker Compose", "AWS", "Android SDK Emulator"],
    description:
      "A remote support platform I built at EE that lets agents control a customer's TV box and see its screen live. Recognised by the Head of Marketing and now on the roadmap for the wider organisation.",
    modalContent: (
      <>
        <p>
          EE TV Assist is a remote support platform I designed and built for
          EE. Support agents can connect to a customer&apos;s TV box, control it
          through a virtual remote and see a live view of the screen, making it
          much easier to troubleshoot issues without a home visit.
        </p>
        <p>
          The dashboard and GUI are built in TypeScript, running on Linux and
          packaged as a Docker Compose image for easy deployment on AWS. For the
          demo, I used the Android SDK emulator to simulate a real TV box.
        </p>
        <p>
          I demonstrated it to the Operations Manager and the R&amp;D development
          team, and it was submitted as a Brilliant Idea. It was recognised by
          the Head of Marketing and is now on the roadmap for the wider
          organisation.
        </p>
      </>
    ),
  },
  {
    title: "OZ Banking",
    imgSrc: "project-imgs/OZ-Banking.png",
    code: "https://github.com/Sage2dope/OZ_banking",
    projectLink: "https://oz-banking-ze67.vercel.app/sign-in",
    tech: ["NextJS", "TypeScript", "Prisma", "Tailwind CSS", "PostgreSQL"],
    description:
      "OZ Banking is a full-stack banking application built with NextJS and TypeScript. It features user authentication, account management, and transaction history.",
    modalContent: (
      <>
        <p>
          OZ Banking is a full-stack banking application built with NextJS and
          TypeScript. It features user authentication, account management, and
          transaction history.
        </p>
      </>
    ),
  },
  {
    title: "For Food Only",
    imgSrc: "project-imgs/ForFoodOnly.png",
    projectLink: "https://www.forfoodonly.co.uk",
    tech: ["React", "Vite", "Railway"],
    description:
      "A website platform for FFO, a home-cooked food catering service. Customers can order fresh, healthy meals with calorie info for every dish.",
    modalContent: (
      <>
        <p>
          For Food Only (FFO) is a website platform I built for a recent food
          catering service offering home-cooked meals made with love.
        </p>
        <p>
          Customers can browse the menu and order fresh, healthy food, with
          calorie information shown for each dish. The frontend is built with
          React & Vite and deployed on Railway.
        </p>
      </>
    ),
  },
];
