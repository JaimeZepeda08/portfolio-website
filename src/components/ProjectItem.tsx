import { GrNext } from "react-icons/gr";

type ProjectItemProps = {
  name: string;
  image: string;
  url: string;
  className?: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  image,
  url,
  className,
}) => {
  return (
    <div
      className={`flex-grow relative group w-1/4 m-8 rounded-xl overflow-hidden shadow-2xl${className}`}
    >
      <img src={image} alt={name} className="group-hover:blur-[2px]" />
      <div className="absolute bottom-0 w-full text-center text-4xl z-10 p-2 bg-green-950/75 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {name}
      </div>
      <div className="absolute right-0 top-0 h-full w-full flex items-center justify-center text-center text-6xl z-10 bg-green-950/75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <span className="flex items-center justify-center text-center text-2xl">
          Learn More
          <GrNext className="text-5xl" />
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
