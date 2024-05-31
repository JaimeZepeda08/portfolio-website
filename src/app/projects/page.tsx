"use client";

import Button from "@/components/Button";
import LargeProjectItem from "@/components/LargeProjectItem";
import LoadingSpinner from "@/components/LoadingSpinner";
import Reveal from "@/components/Reveal";
import SmallProjectItem from "@/components/SmallProjectItem";
import VideoPlayer from "@/components/VideoPlayer";
import WorkItem from "@/components/WorkItem";
import { useEffect, useState } from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

type ProjectItem = {
  title: string;
  description: string;
  skills: string[];
  url: string;
  media?: string[][];
  image: string;
  filters: string[];
};

type WorkItem = {
  company: string;
  title: string;
  date: string[];
  description: string[];
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [showMore, setShowMore] = useState(false);

  const [showVideo, setShowVideo] = useState(false);
  const [video, setVideo] = useState<string[][]>([]);

  const [all, setAll] = useState(true);
  const [SD, setSD] = useState(false);
  const [WD, setWD] = useState(false);
  const [MD, setMD] = useState(false);
  const [ML, setML] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  function handleFilterAll() {
    setAll(!all);
    setSD(false);
    setWD(false);
    setMD(false);
    setML(false);
  }

  function handleFilterSD() {
    setAll(false);
    setSD(!SD);
  }

  function handleFilterWD() {
    setAll(false);
    setWD(!WD);
  }

  function handleFilterMD() {
    setAll(false);
    setMD(!MD);
  }

  function handleFilterML() {
    setAll(false);
    setML(!ML);
  }

  function handleShowMore() {
    setShowMore(!showMore);

    setTimeout(() => {
      window.scrollBy({
        top: 150,
        behavior: "smooth",
      });
    }, 100);
  }

  function handleMedia(media: string[][] | undefined) {
    if (media && media.length > 0) {
      setVideo(media);
      setShowVideo(true);
    }
  }

  function handleCloseVideo() {
    setShowVideo(false);
    setVideo([]);
  }

  const WorkExperience: WorkItem[] = [
    {
      company: "NBO7",
      title: "Software Developer",
      date: ["Sep 2023", "Feb 2024"],
      description: [
        "Collaborated with Professor Frank Weinhold to restore and optimize the NBO7Pro website, resolving compatibility issues with Jmol and packaging the distribution with its own JRE.",
        "Fixed bugs and enhanced functionality in the NBOPro7@Jmol program through collaboration with people from various universities",
      ],
    },
    {
      company: "The Home Depot",
      title: "Sales Associate",
      date: ["June 2023", "Aug 2023"],
      description: [
        "Supervised the garden department, offered excellent customer service, and assisted with sales.",
        "In charge of down-stocking and giving constant shelf maintenance to improve store appearance",
        "Worked in a team-oriented environment to provide the customers with the best shopping experience",
      ],
    },
  ];

  const FeaturedProjects: ProjectItem[] = [
    {
      title: "Six of Badgers",
      description:
        "Worked with a team to build a website that lets users play euchre. Implemented websockets to allow for multiplayer games as well as in-game chat messaging. Served as the Scrum Master, orchestrated meetings, enforced timelines, and fostered a cohesive team environment. Our project adheres to SOLID principles and embraces modern software development practices, including Test-Driven Development to ensure code robustness, Docker for containerization facilitating seamless deployment, and a CI/CD pipeline for a more streamlined development proccess.",
      skills: [
        "React",
        "Tailwind",
        "Spring Boot",
        "Docker",
        "MySQL",
        "Google OAuth",
        "Postman",
      ],
      url: "",
      image: "six-of-badgers.jpeg",
      filters: ["SD", "WD"],
      media: undefined,
    },
    {
      title: "Run Track Pro",
      description:
        "Worked with a team to create an Android App in Java for runners. Users can track their runs and view statistics of their progress over time. We used an SQLite database to store run information, and the Google Maps API to track runs and display real-time data such as distance, pace, and route taken by the user.",
      skills: ["Android Studio", "Java", "Google Maps API", "SQLite"],
      image: "run-track-pro.jpeg",
      url: "https://github.com/rzadluka/RunTrackPro",
      filters: ["SD", "MD"],
      media: undefined,
    },
    {
      title: "Spikes",
      description:
        'Reversed engineered a game from the App Store called "Don\'t Touch the Spikes". Implemented NEAT (Neuroevolution of Augmenting Topologies) to train an AI to play and progressively get better at the game.',
      skills: ["Python", "Pygame", "NEAT"],
      image: "spikes.png",
      url: "https://github.com/JaimeZepeda08/Spikes",
      filters: ["ML"],
      media: [
        ["videos/spikes-train.mov", "AI model training"],
        ["videos/spikes-demo.mov", "Trained model playing the game"],
      ],
    },
    {
      title: "To Do List App",
      description:
        "Created a to-do list app for IPhones using Swift and SwiftUI, featuring tasks, organization by groups, and an isolation mode where users can focus on specific tasks using the pomodoro studying technique. Utilized funcionial programming paradigms such as MVVM.",
      skills: ["XCode", "Swift", "SQLite"],
      image: "to-do.jpeg",
      url: "https://github.com/JaimeZepeda08/ToDo",
      filters: ["SD", "MD"],
      media: undefined,
    },
  ];

  const OtherProjects: ProjectItem[] = [
    {
      title: "Chess v1",
      description:
        "A chess app that lets users play chess against a friend, on the same device, or against the computer. Users are also able to customize the color of the board and several other rules.",
      skills: ["Python", "Pygame", "MiniMax"],
      url: "https://github.com/JaimeZepeda08/Chess-Python",
      image: "",
      filters: ["SD"],
      media: undefined,
    },
    {
      title: "Chess v2",
      description:
        "An improved version of the chess app I made in Java. This one makes use of more advanced programming paradigms such as OOP and inheritance.",
      skills: ["Java", "MiniMax", "OOP"],
      url: "https://github.com/JaimeZepeda08/Chess-Java",
      image: "",
      filters: ["SD"],
      media: undefined,
    },
    {
      title: "Tetris",
      description:
        "A one-day project where I created a fully functional game of tetris in Python using the Pygame library.",
      skills: ["Python", "Pygame"],
      url: "https://github.com/JaimeZepeda08/Tetris",
      image: "",
      filters: ["SD"],
      media: undefined,
    },
    {
      title: "Dino",
      description:
        "Recreated the Google Chrome Dino game in Python. Implemented a genetic algorithm (NEAT) to train AI agents to get progressively better at playing the game",
      skills: ["Python", "Pygame", "NEAT"],
      url: "https://github.com/JaimeZepeda08/Dino",
      image: "",
      filters: ["ML"],
      media: [
        [
          "videos/dino-train.mov",
          "AI model training and getting progressively better",
        ],
      ],
    },
    {
      title: "Rat Population Analysis",
      description:
        "A project I worked on with a small team for a university course (STAT 240). We analyzed rat sighting trends in New York based on monthly temperature.",
      skills: ["R", "Linear Regression"],
      url: "/rat-analysis.html",
      image: "",
      filters: ["ML"],
      media: undefined,
    },
    {
      title: "Snake",
      description:
        'Recreated the game of "Snake" in python using pygame and implemented the A* path finding algorithm to let the computer play on its own.',
      skills: ["Python", "Pygame", "A*"],
      url: "https://github.com/JaimeZepeda08/Snake",
      image: "",
      filters: ["SD"],
      media: [["/videos/snake.mov", "AI agent using A* to play the game"]],
    },
    {
      title: "2048",
      description:
        'A one-day project where I recreated the game "2048" in Python. Implemented a simple algorithm that lets the computer play on its own. Has reached 2028!',
      skills: ["Python", "Pygame"],
      url: "https://github.com/JaimeZepeda08/2048",
      image: "",
      filters: ["SD"],
      media: [["videos/2048-512.mov", "Simple algorithm playing the game"]],
    },
    {
      title: "Bubble Trouble",
      description:
        'Recreated a game called "Bubble Trouble". Implemented progressively harder levels, and simple physics such as ball collision and bouncing.',
      skills: ["Python", "Pygame"],
      url: "https://github.com/JaimeZepeda08/Bubble-Trouble",
      image: "",
      filters: ["SD"],
      media: undefined,
    },
    {
      title: "Personal Portfolio v1",
      description:
        "My first website, coded in pure HTML, CSS, and Javascript, and hosted on GitHub pages. It was never fully finished and I have improved immensely since then.",
      skills: ["HTML", "CSS", "JavaScript"],
      url: "https://jaimezepeda08.github.io/",
      image: "",
      filters: ["WD"],
      media: undefined,
    },
  ];

  return (
    <div>
      <div id="main-content">
        <Reveal width="w-full">
          <div className="flex items-center mt-16 mx-40">
            <span className="text-3xl ">Work Experience</span>
            <div className="bg-gray-200/50 w-1/4 h-[1px] shadow-md mx-5"></div>
          </div>
        </Reveal>

        <div className="mt-5">
          {WorkExperience.map((work, index) => (
            <Reveal width="w-full" horizontal={true} delay={0.2 + 0.1 * index}>
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <WorkItem
                  company={work.company}
                  title={work.title}
                  date={work.date}
                  description={work.description}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="w-full">
          <div className="flex items-center mt-20 mx-40">
            <span className="text-3xl ">Some Projects I've Worked On</span>
            <div className="bg-gray-200/50 w-1/4 h-[1px] shadow-md mx-5"></div>
          </div>
        </Reveal>

        <Reveal width="w-full" horizontal={true}>
          <div className="flex items-center justify-center mt-10 gap-5 text-sm text-gray-400">
            <p>Filter by: </p>
            <Reveal delay={0.1}>
              <div
                onClick={handleFilterAll}
                className="flex items-center justify-center gap-2 hover:text-white cursor-pointer"
              >
                {all ? (
                  <MdOutlineCheckBox className="scale-150" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="scale-150" />
                )}
                <p className="underline-effect">All</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                onClick={handleFilterSD}
                className="flex items-center justify-center gap-2 hover:text-white cursor-pointer"
              >
                {SD ? (
                  <MdOutlineCheckBox className="scale-150" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="scale-150" />
                )}
                <p className="underline-effect">Software Development</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                onClick={handleFilterWD}
                className="flex items-center justify-center gap-2 hover:text-white cursor-pointer"
              >
                {WD ? (
                  <MdOutlineCheckBox className="scale-150" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="scale-150" />
                )}
                <p className="underline-effect">Web Development</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div
                onClick={handleFilterMD}
                className="flex items-center justify-center gap-2 hover:text-white cursor-pointer"
              >
                {MD ? (
                  <MdOutlineCheckBox className="scale-150" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="scale-150" />
                )}
                <p className="underline-effect">Mobile Development</p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div
                onClick={handleFilterML}
                className="flex items-center justify-center gap-2 hover:text-white cursor-pointer"
              >
                {ML ? (
                  <MdOutlineCheckBox className="scale-150" />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank className="scale-150" />
                )}
                <p className="underline-effect">Machine Learning</p>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <div>
          {FeaturedProjects.map((project, index) =>
            all ||
            (SD && project.filters.includes("SD")) ||
            (WD && project.filters.includes("WD")) ||
            (MD && project.filters.includes("MD")) ||
            (ML && project.filters.includes("ML")) ? (
              <Reveal width="w-full" delay={0.2}>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center my-5"
                >
                  <LargeProjectItem
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    image={project.image}
                    url={project.url}
                    media={project.media}
                    showMedia={handleMedia}
                    index={index}
                  />
                </div>
              </Reveal>
            ) : null
          )}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleShowMore}
            text={showMore ? "Show Less" : "Show More"}
          />
        </div>

        {showMore && (
          <div className="grid grid-cols-3 gap-5 mx-60 pb-10">
            {OtherProjects.map((project, index) =>
              all ||
              (SD && project.filters.includes("SD")) ||
              (WD && project.filters.includes("WD")) ||
              (MD && project.filters.includes("MD")) ||
              (ML && project.filters.includes("ML")) ? (
                <div key={index}>
                  <Reveal width="w-full" delay={0.1 * index}>
                    <SmallProjectItem
                      title={project.title}
                      description={project.description}
                      skills={project.skills}
                      url={project.url}
                      media={project.media}
                      showMedia={handleMedia}
                    />
                  </Reveal>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      {showVideo && video.length > 0 && (
        <VideoPlayer videos={video} onClose={handleCloseVideo} />
      )}
    </div>
  );
}
