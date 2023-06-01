"use client";

import ThreeJs from "@/assets/images/threejs.png";
import {
  heroContainerAnimation,
  heroContentAnimation,
  heroTitleAnimation,
  slideAnimation,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../common/CustomButton";

const HeroSection = () => {
  return (
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
          <h1 className="head-text break-keep">
            To The <br className="xl:block hidden" /> World!
          </h1>
        </motion.div>
        <motion.div className="flex flex-col gap-5" {...heroContentAnimation}>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <strong>Quisquam voluptatem quas quidem doloribus quae.</strong>{" "}
            Quisquam voluptatum, voluptate, quibusdam, quia voluptas quod quos
            voluptatem quas quidem doloribus quae.
          </p>
          <Link href={"?main=customizer"} className="w-fit">
            <CustomButton
              backgroundType="filled"
              className="px-4 py-2 font-bold text-sm"
            >
              Customize It!
            </CustomButton>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
