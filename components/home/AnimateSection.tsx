"use client";

import { slideAnimation } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ThreeJs from "@/assets/images/threejs.png";

const AnimateSection = () => {
  return (
    <AnimatePresence>
      <motion.section className="home" {...slideAnimation("left")}>
        <motion.header {...slideAnimation("down")}>
          <Image
            src={ThreeJs}
            alt="threejs logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </motion.header>

        <motion.div>
          <motion.div></motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default AnimateSection;
