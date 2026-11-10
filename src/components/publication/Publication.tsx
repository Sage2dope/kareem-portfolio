import { AiOutlineFileText } from "react-icons/ai";
import Link from "next/link";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const Publication = () => {
  return (
    <section className="section-wrapper" id="publication">
      <SectionHeader title="Publication" dir="l" />
      <Reveal width="w-full">
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-6 md:p-8">
          <p className="text-xs uppercase tracking-wider text-indigo-300 mb-3">
            Research paper
          </p>
          <Link
            href="https://www.academia.edu/180589374/Use_of_Automation_and_AI_in_Law_Firms_A_Means_to_Increase_Internal_Efficiencies_and_Enhance_Client_Experience_"
            target="_blank"
            className="flex items-start gap-3 text-zinc-100 hover:text-indigo-300 transition-colors"
          >
            <AiOutlineFileText className="mt-1 shrink-0 text-2xl" />
            <span className="text-lg md:text-xl font-semibold leading-relaxed">
              Use of Automation and AI in Law Firms: A Means to Increase
              Internal Efficiencies and Enhance Client Experience
            </span>
          </Link>
          <p className="mt-4 leading-relaxed text-zinc-300">
            Published research on how law firms can use automation and AI to
            improve internal efficiency and deliver a better client experience.
          </p>
          <p className="mt-3 text-sm text-zinc-400">Read it on Academia.edu</p>
        </div>
      </Reveal>
    </section>
  );
};
