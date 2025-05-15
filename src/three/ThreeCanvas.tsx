"use client";

import { Canvas } from "@react-three/fiber";
import {
  initalThreeCanvasContextValue,
  ThreeCanvasContext
} from "./ThreeCanvasContext";
import { useState } from "react";
import * as THREE from "three";

export default function ThreeCanvas({
  children
}: {
  children: React.ReactNode;
}) {
  const [box, setBox] = useState<THREE.Box3 | null>(null);
  return (
    <ThreeCanvasContext.Provider
      value={{ ...initalThreeCanvasContextValue, box, setBox }}
    >
      <Canvas>{children}</Canvas>
    </ThreeCanvasContext.Provider>
  );
}
