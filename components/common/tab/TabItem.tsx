import { TabItemType } from "@/constants/tabs";
import Image from "next/image";

interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: TabItemType;
  isActive?: boolean;
}

const TabItem = ({
  data,
  onClick,
  isActive = false,
  ...props
}: TabItemProps) => {
  const { name, icon } = data;

  return (
    <button
      {...props}
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
