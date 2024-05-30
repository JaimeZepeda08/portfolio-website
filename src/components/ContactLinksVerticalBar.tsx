"use client";

import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import Reveal from "./Reveal";

export default function ContactLinksVerticalBar() {
  const modifier: string =
    "scale-[1.6] shadow-sm text-green-800/75 hover:text-green-600 hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.7] hover:-translate-y-1";

  function handleGitHub() {
    window.open("https://github.com/JaimeZepeda08", "_blank");
  }
  function handleLinkedIn() {
    window.open(
      "http://www.linkedin.com/in/jaime-zepeda-pina-98a313292",
      "_blank"
    );
  }

  function handleInstagram() {
    window.open("https://www.instagram.com/jaimezepeda08/", "_blank");
  }

  return (
    <div className="fixed flex flex-col justify-center items-center left-0 bottom-0 gap-10 mx-10">
      <Reveal delay={0.2}>
        <IoLogoGithub onClick={handleGitHub} className={modifier} />
      </Reveal>
      <Reveal delay={0.4}>
        <FaLinkedin onClick={handleLinkedIn} className={modifier} />
      </Reveal>
      <Reveal delay={0.6}>
        <AiFillInstagram onClick={handleInstagram} className={modifier} />
      </Reveal>
      <Reveal>
        <div className="w-[2px] h-20 bg-green-800/75" />
      </Reveal>
    </div>
  );
}
