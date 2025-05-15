import { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import useSetCameraToMeshGroup from "./useSetCameraToMeshGroup";
import { ThreeCanvasContext } from "./ThreeCanvasContext";

export default function ThreeGroup({
  children
}: {
  children: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const { box, setBox } = useContext(ThreeCanvasContext);

  useEffect(() => {
    if (groupRef.current) {
      const newBox = new THREE.Box3().setFromObject(groupRef.current);
      setBox(newBox);
    }
  }, []);

  useSetCameraToMeshGroup(box);

  return <group ref={groupRef}>{children}</group>;
}
