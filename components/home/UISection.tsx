"use client";

import {
  ActionTabs,
  EditorTabNames,
  EditorTabs,
  FilterTabNames,
  FilterTabs,
} from "@/constants/tabs";
import { canvasState } from "@/store/canvasState";
import { globalState } from "@/store/globalState";
import { downloadCanvasToImage } from "@/utils/helperUtils";
import { fadeAnimation, slideAnimation } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSnapshot } from "valtio";
import CustomButton from "../common/CustomButton";
import CustomTab from "../common/tab/CustomTab";
import TabItem from "../common/tab/TabItem";
import PickerContainer from "../picker/PickerContainer";

const UISection = () => {
  const { activePicker } = useSnapshot(globalState);
  const canvasSnap = useSnapshot(canvasState);

  const onChangePicker = (tabName: string) => {
    globalState.activePicker = tabName as EditorTabNames;
  };

  const onChangeFilter = (tabName: string) => {
    canvasState[tabName as FilterTabNames].active =
      !canvasState[tabName as FilterTabNames].active;
  };

  const activeFilterTabs = Object.keys(canvasSnap).filter(
    (tabName) => canvasSnap[tabName as FilterTabNames].active
  );

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
          activeTab={activePicker}
        />

        {activePicker ? <PickerContainer activePicker={activePicker} /> : null}
      </motion.div>

      <motion.div className="fixed top-5 right-5 z-20" {...fadeAnimation}>
        <Link href={"/"}>
          <CustomButton className="px-4 py-2 font-bold text-sm">
            Go Back
          </CustomButton>
        </Link>
      </motion.div>

      <CustomTab
        className="filtertabs-container"
        tabItems={FilterTabs}
        onChangeTabItem={onChangeFilter}
        activeTabs={activeFilterTabs}
        {...slideAnimation("up")}
      />

      <motion.div className="actiontabs-container" {...slideAnimation("down")}>
        <TabItem data={ActionTabs[0]} onClick={downloadCanvasToImage} />
      </motion.div>
    </section>
  );
};

export default UISection;
