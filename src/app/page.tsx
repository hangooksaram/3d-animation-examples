"use client";

import ThreeCanvas from "@/three/ThreeCanvas";
import { ThreeCanvasContext } from "@/three/ThreeCanvasContext";
import ThreeGroup from "@/three/ThreeGroup";
import ThreeMesh from "@/three/ThreeMesh";
import randomVector from "@/utils/random";
import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import * as THREE from "three";

export default function Home() {
  const controls = useRef<OrbitControlsImpl>(null);
  const { box } = useContext(ThreeCanvasContext);

  useEffect(() => {
    if (controls.current && box) {
      const center = box.getCenter(new THREE.Vector3());
      controls.current.target.copy(center);
      controls.current.update();
    }
  }, [box]);

  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <ThreeCanvas>
        <OrbitControls ref={controls} />

        <ThreeGroup>
          {Array.from({ length: 10 }, (_, i) => (
            <ThreeMesh key={i} position={randomVector(0, 10)} />
          ))}
        </ThreeGroup>
      </ThreeCanvas>
    </div>
  );
}
