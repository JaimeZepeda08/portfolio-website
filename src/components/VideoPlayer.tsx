import React, { useEffect } from "react";

type VideoPlayerProps = {
  videos: string[][];
  onClose: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 pointer-events-auto cursor-not-allowed" />
      <div className="relative flex flex-wrap justify-center items-center gap-8 z-10">
        <button
          onClick={onClose}
          className="absolute -top-8 -right-8 text-white text-4xl z-20"
        >
          &times;
        </button>
        {videos.map((video, index) => (
          <div className="flex flex-col gap-4">
            <video
              key={index}
              controls
              autoPlay
              src={video[0]}
              className="z-20 max-w-[500px] max-h-[500px] rounded-xl"
            />
            <p className="flex w-full items-center justify-center text-center">
              {video[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
