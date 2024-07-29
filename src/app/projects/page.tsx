"use client";

import Button from "@/components/Button";
import FilterItem from "@/components/FilterItem";
import LargeProjectItem from "@/components/LargeProjectItem";
import LoadingSpinner from "@/components/LoadingSpinner";
import Reveal from "@/components/Reveal";
import SmallProjectItem from "@/components/SmallProjectItem";
import VideoPlayer from "@/components/VideoPlayer";
import WorkItem from "@/components/WorkItem";
import { useEffect, useState } from "react";

type ProjectItem = {
  title: string;
  description: string;
  skills: string[];
  url: string;
  media?: string[][];
  download?: string;
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
  const [python, setPython] = useState(false);
  const [java, setJava] = useState(false);
  const [swift, setSwift] = useState(false);
  const [r, setR] = useState(false);
  const [react, setReact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  function turnOffAll() {
    setAll(false);
  }

  function turnOnAll() {
    setSD(false);
    setWD(false);
    setMD(false);
    setML(false);
    setPython(false);
    setJava(false);
    setSwift(false);
    setR(false);
    setReact(false);
  }

  function checkFilters(project: ProjectItem) {
    return (
      all ||
      (SD && project.filters.includes("SD")) ||
      (WD && project.filters.includes("WD")) ||
      (MD && project.filters.includes("MD")) ||
      (ML && project.filters.includes("ML")) ||
      (python && project.filters.includes("python")) ||
      (java && project.filters.includes("java")) ||
      (swift && project.filters.includes("swift")) ||
      (r && project.filters.includes("r")) ||
      (react && project.filters.includes("react"))
    );
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
      company: "UW Madison",
      title: "Peer Mentor / Teacher Assistant",
      date: ["June 2024", "Present"],
      description: [
        "Mentored students individually, helping them troubleshoot code and debug programs, leading to improved academic performance.",
        "Collaborated with Professor Gurmail Singh to create engaging course content and adapt teaching methods based on student feedback.",
      ],
    },
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
        "In charge of stocking and giving constant shelf maintenance to improve store appearance",
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
      url: "https://github.com/JaimeZepeda08/SixOfBadgers",
      image: "six-of-badgers.jpeg",
      filters: ["SD", "WD", "java", "react"],
    },
    {
      title: "Run Track Pro",
      description:
        "Worked with a team to create an Android App in Java for runners. Users can track their runs and view statistics of their progress over time. We used an SQLite database to store run information, and the Google Maps API to track runs and display real-time data such as distance, pace, and route taken by the user.",
      skills: ["Android Studio", "Java", "Google Maps API", "SQLite"],
      image: "run-track-pro.jpeg",
      url: "https://github.com/rzadluka/RunTrackPro",
      filters: ["SD", "MD", "java"],
    },
    {
      title: "Spikes",
      description:
        'Reversed engineered a game from the App Store called "Don\'t Touch the Spikes". Implemented NEAT (Neuroevolution of Augmenting Topologies) to train an AI to play and progressively get better at the game.',
      skills: ["Python", "Pygame", "NEAT"],
      image: "spikes.png",
      url: "https://github.com/JaimeZepeda08/Spikes",
      filters: ["ML", "python"],
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
      filters: ["SD", "MD", "swift"],
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
      filters: ["SD", "python"],
      download: "downloads/Chess.zip",
    },
    {
      title: "Chess v2",
      description:
        "An improved version of the chess app I made in Java. This one makes use of more advanced programming paradigms such as OOP and inheritance.",
      skills: ["Java", "MiniMax", "OOP"],
      url: "https://github.com/JaimeZepeda08/Chess-Java",
      image: "",
      filters: ["SD", "java"],
    },
    {
      title: "Tetris",
      description:
        "A one-day project where I created a fully functional game of tetris in Python using the Pygame library.",
      skills: ["Python", "Pygame"],
      url: "https://github.com/JaimeZepeda08/Tetris",
      image: "",
      filters: ["SD", "python"],
      download: "downloads/Tetris.zip",
    },
    {
      title: "Dino",
      description:
        "Recreated the Google Chrome Dino game in Python. Implemented a genetic algorithm (NEAT) to train AI agents to get progressively better at playing the game",
      skills: ["Python", "Pygame", "NEAT"],
      url: "https://github.com/JaimeZepeda08/Dino",
      image: "",
      filters: ["ML", "python"],
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
      filters: ["ML", "r"],
    },
    {
      title: "Snake",
      description:
        'Recreated the game of "Snake" in python using pygame and implemented the A* path finding algorithm to let the computer play on its own.',
      skills: ["Python", "Pygame", "A*"],
      url: "https://github.com/JaimeZepeda08/Snake",
      image: "",
      filters: ["SD", "python"],
      media: [["/videos/snake.mov", "AI agent using A* to play the game"]],
      download: "downloads/Snake.zip",
    },
    {
      title: "2048",
      description:
        'A one-day project where I recreated the game "2048" in Python. Implemented a simple algorithm that lets the computer play on its own. Has reached 2028!',
      skills: ["Python", "Pygame"],
      url: "https://github.com/JaimeZepeda08/2048",
      image: "",
      filters: ["SD", "python"],
      media: [["videos/2048-512.mov", "Simple algorithm playing the game"]],
      download: "downloads/2048.zip",
    },
    {
      title: "Bubble Trouble",
      description:
        'Recreated a game called "Bubble Trouble". Implemented progressively harder levels, and simple physics such as ball collision and bouncing.',
      skills: ["Python", "Pygame"],
      url: "https://github.com/JaimeZepeda08/Bubble-Trouble",
      image: "",
      filters: ["SD", "python"],
      download: "downloads/Bubble Trouble.zip",
    },
    {
      title: "Personal Portfolio v1",
      description:
        "My first website, coded in pure HTML, CSS, and Javascript, and hosted on GitHub pages. It was never fully finished and I have improved immensely since then.",
      skills: ["HTML", "CSS", "JavaScript"],
      url: "https://jaimezepeda08.github.io/",
      image: "",
      filters: ["WD"],
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
          <div className="flex flex-wrap w-full items-center justify-center mt-10 mb-5 gap-5 px-64 text-sm text-gray-400">
            <p>Filter by: </p>
            <Reveal delay={0.1}>
              <FilterItem
                name="All"
                condition={all}
                setUpFunction={turnOnAll}
                filterFunction={setAll}
              />
            </Reveal>

            <Reveal delay={0.15}>
              <FilterItem
                name="Software Development"
                condition={SD}
                setUpFunction={turnOffAll}
                filterFunction={setSD}
              />
            </Reveal>

            <Reveal delay={0.2}>
              <FilterItem
                name="Web Development"
                condition={WD}
                setUpFunction={turnOffAll}
                filterFunction={setWD}
              />
            </Reveal>

            <Reveal delay={0.25}>
              <FilterItem
                name="Mobile Development"
                condition={MD}
                setUpFunction={turnOffAll}
                filterFunction={setMD}
              />
            </Reveal>

            <Reveal delay={0.3}>
              <FilterItem
                name="Machine Learning"
                condition={ML}
                setUpFunction={turnOffAll}
                filterFunction={setML}
              />
            </Reveal>

            <Reveal delay={0.35}>
              <FilterItem
                name="React"
                condition={react}
                setUpFunction={turnOffAll}
                filterFunction={setReact}
              />
            </Reveal>

            <Reveal delay={0.4}>
              <FilterItem
                name="Python"
                condition={python}
                setUpFunction={turnOffAll}
                filterFunction={setPython}
              />
            </Reveal>

            <Reveal delay={0.45}>
              <FilterItem
                name="Java"
                condition={java}
                setUpFunction={turnOffAll}
                filterFunction={setJava}
              />
            </Reveal>

            <Reveal delay={0.5}>
              <FilterItem
                name="Swift"
                condition={swift}
                setUpFunction={turnOffAll}
                filterFunction={setSwift}
              />
            </Reveal>

            <Reveal delay={0.55}>
              <FilterItem
                name="R"
                condition={r}
                setUpFunction={turnOffAll}
                filterFunction={setR}
              />
            </Reveal>
          </div>
        </Reveal>

        <div>
          {FeaturedProjects.map((project, index) =>
            checkFilters(project) ? (
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
                    download={project.download}
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mx-60 md:mx-40 sm:mx-24 gap-5 pb-10">
            {OtherProjects.map((project, index) =>
              checkFilters(project) ? (
                <div key={index}>
                  <Reveal width="w-full" delay={0.1 * index}>
                    <SmallProjectItem
                      title={project.title}
                      description={project.description}
                      skills={project.skills}
                      url={project.url}
                      media={project.media}
                      showMedia={handleMedia}
                      download={project.download}
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
