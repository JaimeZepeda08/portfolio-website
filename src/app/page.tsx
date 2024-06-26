"use client";

import CircleImage from "@/components/CircleImage";
import ItemSkillHome from "@/components/ItemSkillHome";
import LoadingSpinner from "@/components/LoadingSpinner";
import Reveal from "@/components/Reveal";
import SimpleButton from "@/components/SimpleButton";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const block_1: string = "grow w-3/12 m-5";
  const block_2: string = "grow w-8/12 m-5";
  const block_full: string = "w-11/12 m-10";

  return (
    <div className="flex flex-wrap justify-center items-center p-10 mx-20">
      <Reveal width={`${block_1}`} delay={0.6}>
        <CircleImage />
      </Reveal>
      <div className={`${block_2}`}>
        <Reveal horizontal={true}>
          <p
            className="group p-3 bg-green-900/50 shadow-lg w-fit rounded-lg text-green-500 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01] hover:-translate-x-1 hover:-translate-y-1"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            👋 Hi! I'm Jaime Zepeda
          </p>
        </Reveal>
        <br />
        <Reveal horizontal={true} delay={0.2}>
          <p className="text-3xl">
            A <span className="hover:text-green-600">COMPUTER SCIENCE</span>,{" "}
            <span className="hover:text-green-600">DATA SCIENCE</span> and{" "}
            <span className="hover:text-green-600">MATHEMATICS</span> student at{" "}
            <span className="hover:text-red-600">UW Madison</span>
          </p>
        </Reveal>
        <br />
        <Reveal horizontal={true} delay={0.4}>
          <p className="text-gray-400">
            I love working on new{" "}
            <span className="text-green-600">projects</span>, and finding{" "}
            <span className="text-green-600">creative</span> ways to solve
            problems. I am a{" "}
            <span className="text-green-600">natural leader</span> and a{" "}
            <span className="text-green-600">team player</span> that loves
            working in collaborative environments. With{" "}
            <span className="text-green-600">5+ years</span> of coding
            experience, I have extensive background in various areas including:
          </p>
        </Reveal>
        <br />
        <div className="flex gap-20 overflow-hidden">
          <Reveal delay={0.4}>
            <ItemSkillHome path="/code.png" name="Software Development" />
          </Reveal>
          <Reveal delay={0.5}>
            <ItemSkillHome path="/smartphone.png" name="Mobile Development" />
          </Reveal>
          <Reveal delay={0.6}>
            <ItemSkillHome
              path="/machine_learning.png"
              name="Machine Learning"
            />
          </Reveal>
        </div>
      </div>
      <Reveal width={`${block_full}`} delay={0.2}>
        <div
          className={`bg-green-700/10 p-5 my-8 rounded-lg shadow-xl text-center`}
        >
          <span className="text-lg text-gray-400">
            Take a look at some of the{" "}
            <SimpleButton name="Projects" url="/projects" icon={<FaCode />} /> I
            am working on, or visit my{" "}
            <SimpleButton
              name="GitHub"
              url="https://github.com/JaimeZepeda08"
              icon={<FaGithub />}
            />{" "}
            for more details
          </span>
        </div>
      </Reveal>
      <div className={`${block_2}`}>
        <Reveal horizontal={true} delay={0.2}>
          <p className="text-3xl">
            When I am not coding, I enjoy running marathons
          </p>
        </Reveal>
        <br />
        <Reveal horizontal={true} delay={0.4}>
          <p className="text-gray-400">
            I have been running for the past 6 years. I ran Varsity Cross
            Country and Track & Field all throughout High School, and I love
            challenging myself to try new things that seem daunting.
          </p>
        </Reveal>
      </div>
      <Reveal width={`${block_1}`} delay={0.6}>
        <img src="/run1.png" className="rounded-xl shadow-2xl" />
      </Reveal>
    </div>
  );
}
