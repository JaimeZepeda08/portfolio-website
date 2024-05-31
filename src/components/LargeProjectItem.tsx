import { AiOutlineExport } from "react-icons/ai";
import { MdOutlinePermMedia } from "react-icons/md";

type LargeProjectItemProps = {
  title: string;
  description: string;
  skills: string[];
  image: string;
  url?: string;
  media?: string[][];
  showMedia: (media: string[][] | undefined) => void;
  index: number;
};

const LargeProjectItem: React.FC<LargeProjectItemProps> = ({
  title,
  description,
  skills,
  image,
  url,
  media,
  showMedia,
  index,
}) => {
  function handleLearnMore() {
    if (url) {
      window.open(url, "_blank");
    }
  }

  function handleMedia() {
    if (media) {
      showMedia(media);
    }
  }

  return (
    <div className="group flex w-2/3 my-4 p-2 items-center rounded-md transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      {index % 2 === 0 ? (
        <div className="relative w-2/5 h-2/5">
          <img src={image} className="w-full h-full rounded-xl shadow-md" />
          <div className="absolute inset-0 bg-green-800/50 rounded-xl group-hover:bg-transparent"></div>
        </div>
      ) : null}

      <div
        className={`flex-row ${
          index % 2 === 0 ? "text-right" : ""
        } items-end justify-end m-3 w-fit`}
      >
        <p className="text-sm text-green-600">Featured Project</p>
        <p className="text-2xl">{title}</p>

        <div className="h-fit text-sm bg-green-800/25 rounded-md shadow-sm p-4 m-2 group-hover:shadow-2xl text-gray-400 group-hover:text-white">
          {description}
        </div>

        <ul className={`flex ${index % 2 === 0 ? "justify-end" : ""}`}>
          {skills.map((skill, index) => (
            <li
              key={index}
              className="m-2 text-sm text-green-700 hover:text-green-500 hover:shadow-xl"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className={`flex ${index % 2 === 0 ? "justify-end" : ""}`}>
          <div className="flex gap-4 items-center">
            {media && (
              <div
                onClick={handleMedia}
                className="group flex items-center hover:text-green-600 w-fit cursor-pointer"
              >
                <MdOutlinePermMedia className="scale-125 m-2" />
                <p className="hidden group-hover:block underline-effect">
                  Media
                </p>
              </div>
            )}
            {url && (
              <div
                onClick={handleLearnMore}
                className="group flex items-center hover:text-green-600 w-fit cursor-pointer"
              >
                <AiOutlineExport className="scale-125 m-2" />
                <p className="hidden group-hover:block underline-effect">
                  Learn More
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {index % 2 === 1 ? (
        <div className="relative w-2/5 h-2/5">
          <img src={image} className="w-full h-full rounded-xl shadow-md" />
          <div className="absolute inset-0 bg-green-800/50 rounded-xl group-hover:bg-transparent"></div>
        </div>
      ) : null}
    </div>
  );
};

export default LargeProjectItem;
