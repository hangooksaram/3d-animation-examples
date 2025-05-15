import { createContext } from "react";
import * as THREE from "three";

interface ThreeCanvasContextType {
  groupRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>> | null;
  box: THREE.Box3 | null;
  setBox: (box: THREE.Box3 | null) => void;
}
export const initalThreeCanvasContextValue: ThreeCanvasContextType = {
  groupRef: null,
  box: null,
  setBox: () => {}
};

export const ThreeCanvasContext = createContext<ThreeCanvasContextType>(
  initalThreeCanvasContextValue
);
