import { AnimationProps } from "framer-motion";

export const transition: AnimationProps["transition"] = {
  type: "spring",
  duration: 0.8,
};

type SlideDirection = "left" | "right" | "up" | "down";

export const slideAnimation = (direction: SlideDirection): AnimationProps => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    transition,
  };
};

export const heroContainerAnimation: AnimationProps = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition,
};

export const heroTitleAnimation: AnimationProps = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const heroContentAnimation: AnimationProps = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};
