import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React from "react";

const BackdropLight = () => {
  return (
    <AccumulativeShadows
      frames={60}
      temporal
      alphaTest={0.85}
      scale={10}
      position={[0, 0, -0.14]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
        castShadow={false}
      />
    </AccumulativeShadows>
  );
};

export default BackdropLight;
