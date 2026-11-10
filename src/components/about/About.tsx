import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Kareem, if you haven&apos;t already gathered that by
              now. I&apos;m a qualified lawyer (LLM, Distinction) turned
              software engineer in England. I sit where law meets technology:
              understanding how legal teams work, spotting what would genuinely
              help, and prototyping it with Python, JavaScript, LLM APIs, Power
              Platform and AI coding tools.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I currently work at BT Group, where I built EE TV assist tool for diagnostic purposes . At Unitedsea, I led an engineering team where we built
              a legal document automation platform for international trade. Most
              recently, I built an NDA Review Assistant that flags risky clauses
              against a playbook. I&apos;ve also published research on AI and
              automation in law firms.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of work, I love to read and play video games. Any given
              Sunday you&apos;ll find me either with my nose in a book or
              exploring the latest legal AI tools.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m actively looking for a role where I can turn ideas into
              practical legal innovation. If you think you&apos;ve got an
              opening that I might like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
