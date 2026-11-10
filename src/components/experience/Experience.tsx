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
    position: "Network Operations Specialist",
    time: "2024 - Present",
    location: "England, UK",
    description:
      "Analysed incident trends across BT and EE services, carrying out root cause analysis and recommending improvements.",
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
    position: "Legal Technology Lead",
    time: "2025 - Present",
    location: "London",
    description:
      "Leading a team to build a document automation platform that digitises legally binding trade documents, including bills of lading, certificates of origin and invoices. Translated legal and regulatory requirements from the ICC, DCSA and GLEIF into practical workflows, prototyping quickly with AI coding tools.",
    tech: [
      "React",
      "Node",
      "TypeScript",
      "Document Automation",
      "Smart Contracts",
      "Azure",
      "Microsoft 365",
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
