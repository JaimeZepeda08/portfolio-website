type SimpleButtonProps = {
  name: string;
  url: string;
  icon?: React.ReactNode;
};

export default function SimpleButton({ name, url, icon }: SimpleButtonProps) {
  return (
    <a
      href={url}
      className="inline-flex items-center bg-transparent border-2 rounded-lg p-2 shadow-xl hover:text-green-500 hover:border-green-500"
    >
      {icon && <div className="mr-2">{icon}</div>}
      {name}
    </a>
  );
}
