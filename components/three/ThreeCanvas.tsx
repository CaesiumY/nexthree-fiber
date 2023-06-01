"use client";

import { globalState } from "@/store/globalState";
import { Center, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import BackdropLight from "./BackdropLight";
import CameraRig from "./CameraRig";
import { ShirtModel } from "./ShirtModel";

const ThreeCanvas = () => {
  const onClickCanvas = () => (globalState.activePicker = null);

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 25,
        }}
        gl={{
          preserveDrawingBuffer: true,
        }}
        onClick={onClickCanvas}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.75} />
          {/* <Environment preset="city" /> */}

          <CameraRig>
            <BackdropLight />
            <Center>
              <ShirtModel />
            </Center>
          </CameraRig>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ThreeCanvas;
