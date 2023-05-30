"use client";

import { Environment, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { ShirtModel } from "./ShirtModel";

const ThreeCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <Center>
        <ShirtModel />
      </Center>
    </Canvas>
  );
};

export default ThreeCanvas;
