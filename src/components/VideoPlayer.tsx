import React, { useEffect } from "react";
import Reveal from "./Reveal";

type VideoPlayerProps = {
  videos: string[][];
  onClose: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.add("blur-sm");
    }

    return () => {
      document.body.style.overflow = "auto";

      if (mainContent) {
        mainContent.classList.remove("blur-sm");
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 pointer-events-auto cursor-not-allowed" />
      <div className="relative flex flex-wrap justify-center items-center gap-8 z-10">
        <Reveal width="w-full">
          <button
            onClick={onClose}
            className="absolute -top-5 -right-5 text-white text-4xl z-20"
          >
            &times;
          </button>
        </Reveal>
        {videos.map((video, index) => (
          <Reveal delay={0.2 * index}>
            <div className="flex flex-col gap-4">
              <video
                key={index}
                controls
                autoPlay
                src={video[0]}
                className="z-20 max-w-[500px] max-h-[500px] rounded-xl"
              />
              <Reveal delay={0.2 + 0.2 * index} width="w-full">
                <p className="flex w-full items-center justify-center text-center">
                  {video[1]}
                </p>
              </Reveal>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
