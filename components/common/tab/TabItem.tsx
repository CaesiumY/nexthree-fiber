import { TabItemType } from "@/constants/tabs";
import Image from "next/image";

interface TabItemProps {
  data: TabItemType;
  isActive?: boolean;
  onClick?: () => void;
}

const TabItem = ({ data, onClick, isActive = false }: TabItemProps) => {
  const { name, icon } = data;

  return (
    <button
      className={`p-2 hover:backdrop-brightness-50 rounded-md ${
        isActive ? "backdrop-brightness-50" : ""
      }`}
      onClick={onClick}
    >
      <Image src={icon} alt={name} className="object-contain w-8 h-8" />
    </button>
  );
};

export default TabItem;
