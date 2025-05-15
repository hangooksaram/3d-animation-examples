"use client"

import { useRef } from "react";
import * as THREE from "three";
import { VECTOR } from "./type";
import useRotateOnHover from "./useRotateOnHover";
import { Text } from "@react-three/drei";

const ThreeMesh = ({position}: { position: VECTOR }) => {
  const meshRef = useRef<THREE.Mesh | null>(null);
  
  const {onPointerEnter, onPointerLeave}= useRotateOnHover(meshRef, 0.5);

  return (
      <mesh position = {position} ref={meshRef} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} >
        <boxGeometry args={[1, 1, 1]} />
        <Text
        fontSize={0.3} 
        position={[0, 1.2, 0.01]}
        maxWidth={2}
        textAlign="center"
        >
          hi
        <meshBasicMaterial color="orange" />
        </Text>
      </mesh>
    
  );  
}

export default ThreeMesh;