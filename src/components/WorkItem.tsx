"use client";

import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { VscTriangleUp } from "react-icons/vsc";
import Reveal from "./Reveal";

type WorkItemProps = {
  company: string;
  title: string;
  date: string[];
  description: string[];
};

const WorkItem: React.FC<WorkItemProps> = ({
  company,
  title,
  date,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded(!expanded);
  }

  return (
    <div className="flex m-4 w-3/5">
      <div className="min-w-fit flex items-center text-sm text-green-600 mx-5">
        {date[0]} - {date[1]}
      </div>
      <div
        onClick={handleExpand}
        className="group transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer"
      >
        <div className="flex items-center text-lg ">
          <span className="text-xl mr-1">{company}</span> |
          <span className="italic text-green-600 ml-1">{title}</span>
          {expanded ? (
            <VscTriangleUp className="text-green-600/50 mx-2 shadow-sm group-hover:text-green-500 group-hover:shadow-xl" />
          ) : (
            <VscTriangleDown className="text-green-600/50 mx-2 shadow-sm group-hover:text-green-500 " />
          )}
        </div>
        {expanded ? (
          <Reveal>
            <ul className="list-disc space-y-4 w-full h-fit p-4 my-4 rounded-md shadow-sm bg-green-800/25 transition-transform duration-300 ease-in-out group-hover:shadow-2xl">
              {description.map((description, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-400 group-hover:text-white ml-4"
                >
                  {description}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
};

export default WorkItem;
