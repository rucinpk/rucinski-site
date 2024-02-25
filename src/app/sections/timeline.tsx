"use client";

import useTypewriter from "../hooks/useTypewriter";

import { TIMELINE } from "../constants/timeline";
import { FaSuitcase } from "react-icons/fa6";

const TimelineSection = () => {
  const words = ["timeline", "experience", "work history"];
  const { cursor, typewriter } = useTypewriter(words);
  return (
    <section className="px-16 flex flex-col items-center justify-center bg-gradient-to-b to-white from-secondary from-50%">
      <h6 className="font-extrabold text-4xl leading-loose lg:text-6xl md:text-5xl sm:text-4xl">
        <span className="text-nowrap whitespace-nowrap ">
          My <span className="text-primary" ref={typewriter} />
        </span>
        <span className="text-primary" ref={cursor}>
          |
        </span>
        <br />
      </h6>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:pb-16 md:pb-8 md:px-0 sm:px-8 mt-16 bg-primary bg-opacity-5 rounded-lg backdrop-blur-3xl backdrop-filter p-4 cuberto-hidden">
        {TIMELINE.map((timeline) => (
          <div
            key={timeline.company}
            className="relative pl-14 border-l-2 border-gray-800"
          >
            <div className="absolute -left-6 top-0 w-11 h-11 flex items-center justify-center	rounded-full bg-violet-700 text-gray-200 dark:text-black">
              <FaSuitcase />
            </div>
            <p className="dark:bg-gray-700 bg-gray-400 p-2 rounded-2xl inline-block text-lg">
              {timeline.time}
            </p>
            <div className="font-black pt-2 text-3xl">
              {timeline.title}
              <span className="font-thin"> - {timeline.company}</span>
            </div>
            <p className="font-thin py-2 text-xl">{timeline.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
