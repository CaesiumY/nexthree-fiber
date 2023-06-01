"use client";

import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import HeroSection from "./HeroSection";
import UISection from "./UISection";

const HomeAnimateContainer = () => {
  const searchParams = useSearchParams();

  const isCustomizer = searchParams.get("main") === "customizer";

  return (
    // only check for direct children
    <AnimatePresence initial={false} mode="wait">
      {isCustomizer ? <UISection /> : <HeroSection />}
    </AnimatePresence>
  );
};

export default HomeAnimateContainer;
