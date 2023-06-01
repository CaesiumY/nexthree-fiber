import { EditorTabNames, TabItemType } from "@/constants/tabs";
import { HTMLMotionProps, motion } from "framer-motion";
import TabItem from "./TabItem";

interface CustomTabProps extends HTMLMotionProps<"div"> {
  tabItems: readonly TabItemType[];
  onChangeTabItem?: (tabName: TabItemType["name"]) => void;
}

const CustomTab = ({ tabItems, onChangeTabItem, ...props }: CustomTabProps) => {
  return (
    <motion.div {...props}>
      {tabItems.map((tabData) => (
        <TabItem
          key={tabData.name}
          data={tabData}
          onClick={() => onChangeTabItem?.(tabData.name)}
        />
      ))}
    </motion.div>
  );
};

export default CustomTab;
