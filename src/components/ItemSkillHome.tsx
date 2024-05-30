type ItemSkillHomeProps = {
  path: string;
  name: string;
};

const ItemSkillHome: React.FC<ItemSkillHomeProps> = ({ path, name }) => {
  return (
    <div className="bg-green-700/25 rounded-lg shadow-xl p-3 text-center text-gray-400">
      <div className="flex flex-col items-center">
        <img src={path} className="w-1/3" alt={name} />
        <br />
        <p className="text-sm">{name}</p>
      </div>
    </div>
  );
};

export default ItemSkillHome;
