"use client";

import { globalState } from "@/store/globalState";
import { Center, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSnapshot } from "valtio";
import BackdropLight from "./BackdropLight";
import CameraRig from "./CameraRig";
import { ShirtModel } from "./ShirtModel";
import { YachtModel } from "./YachtModel";

const ThreeCanvas = () => {
  const { activeModel } = useSnapshot(globalState);

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
        {/* <OrbitControls enablePan={false} /> */}

        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.75} />

          <CameraRig>
            <BackdropLight />
            <Center>
              {activeModel === "shirt" ? <ShirtModel /> : null}
              {activeModel === "yacht" ? <YachtModel /> : null}
            </Center>
          </CameraRig>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ThreeCanvas;
