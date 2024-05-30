import { AiOutlineExport } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa6";

type SmallProjectItemProps = {
  title: string;
  description: string;
  skills: string[];
  url?: string;
};

const SmallProjectItem: React.FC<SmallProjectItemProps> = ({
  title,
  description,
  skills,
  url,
}) => {
  function handleClick() {
    if (url) {
      window.open(url, "_blank");
    }
  }

  return (
    <div className="group flex-col h-fit p-5 bg-green-900/40 rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <FaRegFolder className="text-green-700/50 scale-[2.5] mx-2 mt-4" />
        <AiOutlineExport
          onClick={handleClick}
          className="hover:text-green-600 scale-125"
        />
      </div>

      <br />
      <p className="group-hover:text-green-500 text-xl mb-2">{title}</p>
      <p className="text-sm text-gray-400 group-hover:text-white">
        {description}
      </p>
      <br />
      <ul className="flex justify-end">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="m-2 text-sm text-green-700 hover:text-green-500 hover:shadow-xl"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallProjectItem;
