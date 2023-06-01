import { TabItemType } from "@/constants/tabs";
import { globalState } from "@/store/globalState";
import { fromHexToRGB } from "@/utils/colorUtils";
import Image from "next/image";
import { useSnapshot } from "valtio";

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

  const { themeColor } = useSnapshot(globalState);
  const { r, g, b } = fromHexToRGB(themeColor);

  return (
    <button
      {...props}
      className={`p-2 hover:bg-opacity-100 rounded-md bg-opacity-0 ${
        isActive ? "bg-opacity-100" : ""
      }`}
      onClick={onClick}
      style={{
        backgroundColor: `rgb(${r} ${g} ${b} / var(--tw-bg-opacity))`,
      }}
    >
      <Image src={icon} alt={name} className="object-contain w-8 h-8" />
    </button>
  );
};

export default TabItem;
