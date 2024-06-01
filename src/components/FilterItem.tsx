import { Dispatch, SetStateAction } from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

type FilterItemProps = {
  name: string;
  condition: boolean;
  setUpFunction: () => void;
  filterFunction: Dispatch<SetStateAction<boolean>>;
};

const FilterItem: React.FC<FilterItemProps> = ({
  name,
  condition,
  setUpFunction,
  filterFunction,
}) => {
  function handleFilter() {
    setUpFunction();
    filterFunction(!condition);
  }

  return (
    <div
      onClick={handleFilter}
      className="flex items-center justify-center gap-2 hover:text-white cursor-pointer"
    >
      {condition ? (
        <MdOutlineCheckBox className="scale-150" />
      ) : (
        <MdOutlineCheckBoxOutlineBlank className="scale-150" />
      )}
      <p className="underline-effect">{name}</p>
    </div>
  );
};

export default FilterItem;
