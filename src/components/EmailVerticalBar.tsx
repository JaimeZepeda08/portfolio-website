"use client";

import Reveal from "./Reveal";

export default function EmailVerticalBar() {
  const modifier: string =
    "shadow-sm text-green-800/75 hover:text-green-600 hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1";

  function handleMessage() {
    window.location.href = "mailto:jzepedapina@gmail.com";
  }

  return (
    <div className="fixed flex flex-col justify-center items-center right-0 bottom-0 gap-10 mx-10 z-10">
      <Reveal delay={0.8}>
        <span
          onClick={handleMessage}
          className={`${modifier} vertical-text cursor-pointer`}
        >
          jzepedapina@gmail.com
        </span>
      </Reveal>
      <Reveal>
        <div className="w-[2px] h-20 bg-green-800/75" />
      </Reveal>
    </div>
  );
}
