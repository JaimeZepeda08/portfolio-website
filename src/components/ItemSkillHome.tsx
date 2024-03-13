type ItemSkillHomeProps = {
  path: string;
  name: string;
};

const ItemSkillHome: React.FC<ItemSkillHomeProps> = ({ path, name }) => {
  return (
    <div className="bg-green-700/50 rounded-xl shadow-xl p-3 border-2 text-center">
      <div className="flex flex-col items-center">
        <img src={path} className="w-1/4" alt={name} />
        <br />
        <p className="text-lg">{name}</p>
      </div>
    </div>
  );
};

export default ItemSkillHome;
