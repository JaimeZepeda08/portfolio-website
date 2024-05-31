import { AiOutlineExport } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa6";
import { MdOutlinePermMedia } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

type SmallProjectItemProps = {
  title: string;
  description: string;
  skills: string[];
  url?: string;
  media?: string[][];
  showMedia: (media: string[][] | undefined) => void;
  download?: string;
};

const SmallProjectItem: React.FC<SmallProjectItemProps> = ({
  title,
  description,
  skills,
  url,
  media,
  showMedia,
  download,
}) => {
  function handleClick() {
    if (url) {
      window.open(url, "_blank");
    }
  }

  function handleMedia() {
    if (media) {
      showMedia(media);
    }
  }

  function handleDownload() {
    if (download) {
      const link = document.createElement("a");
      link.href = download;
      link.download = download.split("/").pop() || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <div className="group relative flex-col h-fit p-5 bg-green-900/40 rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <FaRegFolder className="text-green-700/50 scale-[2.5] mx-2 mt-4" />
        <div className="flex gap-4">
          {download && (
            <IoMdDownload
              onClick={handleDownload}
              className="text-gray-400/50 group-hover:text-white group-hover:hover:text-green-600 scale-125 cursor-pointer"
            />
          )}
          {media && (
            <MdOutlinePermMedia
              onClick={handleMedia}
              className="text-gray-400/50 group-hover:text-white group-hover:hover:text-green-600 scale-125 cursor-pointer"
            />
          )}
          {url && (
            <AiOutlineExport
              onClick={handleClick}
              className="text-gray-400/50 group-hover:text-white group-hover:hover:text-green-600 scale-125 cursor-alias"
            />
          )}
        </div>
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
