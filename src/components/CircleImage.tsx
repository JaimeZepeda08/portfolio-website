export default function CircleImage() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/myPhoto.png"
        alt="Profile"
        className="rounded-full w-96 h-96 object-cover shadow-2xl border-8"
      />
    </div>
  );
}
