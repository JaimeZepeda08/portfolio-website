type CircleImageProps = {
  className?: string;
};

const CircleImage: React.FC<CircleImageProps> = ({ className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img
        src="/myPhoto.png"
        alt="Profile"
        className="rounded-full w-80 h-80 object-cover shadow-2xl"
      />
    </div>
  );
};

export default CircleImage;
