type SimpleButtonProps = {
  name: string;
  url: string;
  icon?: React.ReactNode;
};

export default function SimpleButton({ name, url, icon }: SimpleButtonProps) {
  return (
    <a
      href={url}
      className="inline-flex items-center bg-transparent border-2 border-gray-400 text-gray-400 rounded-lg pl-2 pr-2 shadow-sm hover:text-green-600 hover:border-green-600 hover:drop-shadow-2xl"
    >
      {icon && <div className="mr-2">{icon}</div>}
      {name}
    </a>
  );
}
