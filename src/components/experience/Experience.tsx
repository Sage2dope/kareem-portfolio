import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BT Group",
    position: "Connections Guide",
    time: "2024 - Present",
    location: "England, UK",
    description:
      "Helping connect clients with the right solutions. Providing excellent customer service and technical support.",
    tech: [
      "Albert Knowledge Base",
      "Salesforce",
      "CRM",
      "RescueAssist",
      "Homeview+",
      "IT Systems",
    ],
  },
  {
    title: "Unitedsea.org",
    position: "Lead Software Engineer",
    time: "2024 - 2025",
    location: "London",
    description:
      "Leading a team to develop a platform for digitizing trade documents worldwide. Implemented features to enhance user experience and streamline operations.",
    tech: [
      "React",
      "Node",
      "Typescript",
      "Blockchain",
      "Postgres",
      "Smart Contracts",
      "CouchDB",
    ],
  },
  {
    title: "Bank.Green",
    position: "Backend Engineer",
    time: "2022 - 2023",
    location: "USA (Remote)",
    description:
      "Developed and maintained backend services for a green banking platform. Focused on building scalable APIs and integrating third-party services to enhance functionality.",
    tech: ["Node.js", "Django", "MongoDB", "AWS", "Docker", "RESTful APIs"],
  },
];
