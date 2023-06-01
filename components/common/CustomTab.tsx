import { TabItem } from "@/constants/tabs";
import { HTMLMotionProps, motion } from "framer-motion";

interface CustomTabProps extends HTMLMotionProps<"div"> {
  tabItems: TabItem[];
}

const CustomTab = ({ tabItems, ...props }: CustomTabProps) => {
  return (
    <motion.div {...props}>
      {tabItems.map((tab) => (
        <span key={tab.name}>{tab.name}</span>
      ))}
    </motion.div>
  );
};

export default CustomTab;
