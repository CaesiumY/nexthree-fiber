"use client";

import { EditorTabs, FilterTabs } from "@/constants/tabs";
import { fadeAnimation, slideAnimation } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CustomButton from "../common/CustomButton";

const UISection = () => {
  const searchParams = useSearchParams();

  const isCustomizer = searchParams.get("main") === "customizer";

  return (
    <AnimatePresence>
      {isCustomizer ? (
        <section>
          <motion.div
            className="fixed top-1/2 left-0 z-10 -translate-y-1/2"
            {...slideAnimation("left")}
            animate={{ x: 0, y: "-50%", opacity: 1 }}
          >
            <div className="editortabs-container">
              {EditorTabs.map((tab) => (
                <span key={tab.name}>{tab.name}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="fixed top-5 right-5 z-10" {...fadeAnimation}>
            <Link href={"/"}>
              <CustomButton className="px-4 py-2 font-bold text-sm">
                Go Back
              </CustomButton>
            </Link>
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <span key={tab.name}>{tab.name}</span>
            ))}
          </motion.div>
        </section>
      ) : null}
    </AnimatePresence>
  );
};

export default UISection;
