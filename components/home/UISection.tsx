"use client";

import { EditorTabs, FilterTabs, TabItemType } from "@/constants/tabs";
import { fadeAnimation, slideAnimation } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "../common/CustomButton";
import CustomTab from "../common/tab/CustomTab";

const UISection = () => {
  const [activeTab, setActiveTab] = useState<TabItemType["name"] | null>(null);

  const onChangePicker = (tabName: TabItemType["name"]) => {
    setActiveTab(tabName);
  };

  return (
    <section>
      <motion.div
        className="fixed top-1/2 left-0 z-10 -translate-y-1/2"
        {...slideAnimation("left")}
        animate={{ x: 0, y: "-50%", opacity: 1 }}
      >
        <CustomTab
          className="editortabs-container p-2"
          tabItems={EditorTabs}
          onChangeTabItem={onChangePicker}
        />
      </motion.div>

      <motion.div className="fixed top-5 right-5 z-10" {...fadeAnimation}>
        <Link href={"/"}>
          <CustomButton className="px-4 py-2 font-bold text-sm">
            Go Back
          </CustomButton>
        </Link>
      </motion.div>

      <CustomTab
        className="filtertabs-container"
        tabItems={FilterTabs}
        {...slideAnimation("up")}
      />
    </section>
  );
};

export default UISection;
