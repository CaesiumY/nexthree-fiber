"use client";

import ThreeJs from "@/assets/images/threejs.png";
import {
  heroContainerAnimation,
  heroContentAnimation,
  heroTitleAnimation,
  slideAnimation,
} from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CustomButton from "../common/CustomButton";

const AnimateSection = () => {
  const searchParams = useSearchParams();

  const isIntro = searchParams.get("main") !== "customizer";

  return (
    // only check for direct children
    <AnimatePresence initial={false} mode="wait">
      {isIntro ? (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <Image
              src={ThreeJs}
              alt="threejs logo"
              width={32}
              height={33}
              className="object-contain"
              priority
            />
          </motion.header>

          <motion.div className="home-content" {...heroContainerAnimation}>
            <motion.div {...heroTitleAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="hidden xl:block" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...heroContentAnimation}
            >
              <p className="text-gray-600 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <strong>Quisquam voluptatem quas quidem doloribus quae.</strong>{" "}
                Quisquam voluptatum, voluptate, quibusdam, quia voluptas quod
                quos voluptatem quas quidem doloribus quae.
              </p>
              <Link href={"?main=customizer"}>
                <CustomButton
                  backgroundType="filled"
                  className="px-4 py-2 font-bold text-sm w-fit"
                >
                  Customize It!
                </CustomButton>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

export default AnimateSection;
