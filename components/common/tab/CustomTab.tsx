import { TabItemType } from "@/constants/tabs";
import { HTMLMotionProps, motion } from "framer-motion";
import TabItem from "./TabItem";

interface CustomTabProps extends HTMLMotionProps<"div"> {
  tabItems: TabItemType[];
}

const CustomTab = ({ tabItems, ...props }: CustomTabProps) => {
  return (
    <motion.div {...props}>
      {tabItems.map((tabData) => (
        <TabItem key={tabData.name} data={tabData} />
      ))}
    </motion.div>
  );
};

export default CustomTab;
