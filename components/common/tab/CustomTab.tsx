import { TabItemType } from "@/constants/tabs";
import { HTMLMotionProps, motion } from "framer-motion";
import TabItem from "./TabItem";

interface CustomTabProps extends HTMLMotionProps<"div"> {
  tabItems: readonly TabItemType[];
  onChangeTabItem?: (tabName: TabItemType["name"]) => void;
  activeTab?: TabItemType["name"] | null;
  activeTabs?: TabItemType["name"][];
}

const CustomTab = ({
  tabItems,
  onChangeTabItem,
  activeTab = null,
  activeTabs = [],
  ...props
}: CustomTabProps) => {
  return (
    <motion.div {...props}>
      {tabItems.map((tabData) => (
        <TabItem
          key={tabData.name}
          data={tabData}
          onClick={() => onChangeTabItem?.(tabData.name)}
          isActive={
            activeTab === tabData.name || activeTabs.includes(tabData.name)
          }
        />
      ))}
    </motion.div>
  );
};

export default CustomTab;
