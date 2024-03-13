import CircleImage from "@/components/CircleImage";
import ItemSkillHome from "@/components/ItemSkillHome";
import SimpleButton from "@/components/SimpleButton";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { TbBrandMinecraft } from "react-icons/tb";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-12 mt-20 m-40 justify-center items-center">
      <CircleImage />
      <div className="col-span-2">
        <p
          className="p-3 bg-green-900/50 shadow-lg w-fit rounded-lg text-xl text-green-500"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          👋 Hi! I'm Jaime Zepeda
        </p>
        <br />
        <p className="text-5xl">
          {"A "}
          <span className="text-green-500">{"<COMPUTER SCIENCE />"}</span>
          {" and "}
          <span className="text-green-500">DATA SCIENCE</span>
          {" student at "}
          <span className="text-rose-500">UW-Madison</span>
        </p>
        <br />
        <p className="text-xl">
          {" "}
          I love working on new <span className="text-green-500">projects</span>
          , and finding <span className="text-green-500">creative</span> ways to
          solve problems. I am a{" "}
          <span className="text-green-500">natural leader</span> and a{" "}
          <span className="text-green-500">team player</span> that loves working
          in collaborative environments. With 5+ years of coding experience, I
          have extensive experience in many areas including:
        </p>
        <br />
        <div className="flex gap-20">
          <ItemSkillHome path="/code.png" name="Software Development" />
          <ItemSkillHome path="/smartphone.png" name="Mobile Development" />
          <ItemSkillHome path="/machine_learning.png" name="Machine Learning" />
        </div>
      </div>
      <div className="col-span-3 border-4 border-green-900 bg-green-700/10 p-5 rounded-3xl shadow-xl text-center">
        <span className="text-2xl">
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
      <div className="col-span-2">
        <p className="text-4xl">
          When I am not coding, I enjoy running marathons 🏃‍♂️
        </p>
        <br />
        <p className="text-xl">
          I have been running for the past 6 years. I ran Varsity Cross Country
          and Track & Field all throughout High School. I love challenging
          myself to try new things that seem daunting.
        </p>
      </div>
      <img src="/run1.png" className="rounded-xl shadow-2xl border-8" />
      <img src="/minecraft.png" className="rounded-xl shadow-2xl border-8" />
      <div className="col-span-2">
        <p className="text-4xl">I also love videogames 🎮</p>
        <br />
        <p className="text-xl">PLACEHOLDER TEXT - REPLACE</p>
        <br />
        <span className="text-xl">
          Check out this{" "}
          <SimpleButton
            name="Minecraft Server"
            url="/"
            icon={<TbBrandMinecraft />}
          />{" "}
          that I created, or this{" "}
          <SimpleButton
            name="Minecraft Mod"
            url="/"
            icon={<TbBrandMinecraft />}
          />{" "}
        </span>
      </div>
      <div className="col-span-3 h-8" />
    </div>
  );
}
