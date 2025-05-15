import { useFrame } from "@react-three/fiber";
import { RefObject, useState } from "react";
import * as THREE from "three";

const useRotateOnHover = (ref: RefObject<THREE.Mesh | null>, speed: number) => {
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (hovered && ref && ref.current) {
      ref.current.rotation.x += speed * delta;
      ref.current.rotation.y += speed * delta;
    }
  });

  return {
    onPointerEnter: () => {
      setHovered(true);
    },
    onPointerLeave: () => {
      setHovered(false);
    },
  };
}
export default useRotateOnHover;