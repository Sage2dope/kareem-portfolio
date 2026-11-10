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
    title: "NDA Review Assistant",
    imgSrc: "project-imgs/ndareview.png",
    projectLink: "https://nda-review-assistant.streamlit.app/",
    tech: ["Python", "Streamlit", "LLM", "NLP"],
    description:
      "An AI-powered tool that reviews Non-Disclosure Agreements, flags risky or unusual clauses and summarises the key terms so you know what you are signing.",
    modalContent: (
      <>
        <p>
          NDA Review Assistant is a web app I built to take the pain out of
          reading Non-Disclosure Agreements. Upload or paste an NDA and it
          breaks the document down clause by clause.
        </p>
        <p>
          It highlights risky or one-sided terms, summarises the key
          obligations and suggests points worth negotiating. The app is built
          in Python with Streamlit and deployed on Streamlit Community Cloud.
        </p>
      </>
    ),
  },
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
      "(Internal tool) A remote support platform I built at EE that lets agents control a customer's TV box and see its screen live. Recognised by the Head of Marketing and now on the roadmap for the wider organisation.",
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
        <p className="text-sm text-zinc-400">
          This is an internal tool, so the live project and source code are
          confidential and cannot be shared.
        </p>
      </>
    ),
  },
  {
    title: "OZ Banking",
    imgSrc: "project-imgs/OZ-Banking.png",
    tech: ["NextJS", "TypeScript", "Prisma", "Tailwind CSS", "PostgreSQL"],
    description:
      "(Internal tool) OZ Banking is a full-stack banking application built with NextJS and TypeScript. It features user authentication, account management, and transaction history.",
    modalContent: (
      <>
        <p>
          OZ Banking is a full-stack banking application built with NextJS and
          TypeScript. It features user authentication, account management, and
          transaction history.
        </p>
        <p className="text-sm text-zinc-400">
          This is an internal tool, so the live project and source code are
          confidential and cannot be shared.
        </p>
      </>
    ),
  },
];
