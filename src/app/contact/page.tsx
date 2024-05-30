"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  function handleMessage() {
    window.location.href = "mailto:jzepedapina@gmail.com";
  }

  function handleGitLink() {
    window.open("https://github.com/JaimeZepeda08/portfolio-website", "_blank");
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-center gap-10">
      <Reveal>
        <p className="text-4xl text-green-600">Get In Touch</p>
      </Reveal>
      <Reveal width="w-2/3" delay={0.1}>
        <p>
          I am always looking for new and exciting projects to be a part of.
          Send me a message if you are interested in working with me or just
          want to say hi.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <Button onClick={handleMessage} text="Say Hi!" />
      </Reveal>
      <Reveal delay={0.3}>
        <p
          onClick={handleGitLink}
          className="text-gray-400 mt-20 underline-effect hover:text-green-600 cursor-pointer"
        >
          Designed & Built by Jaime Zepeda
        </p>
      </Reveal>
    </div>
  );
}
