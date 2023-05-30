"use client";

import { Environment, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { ShirtModel } from "./ShirtModel";
import CameraRig from "./CameraRig";
import BackdropLight from "./BackdropLight";

const ThreeCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <BackdropLight />
        <Center>
          <ShirtModel />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default ThreeCanvas;
