"use client"

import { useGLTF } from "@react-three/drei";
import { Object3D, Object3DEventMap } from "three";
import * as THREE from "three";
import { VECTOR } from "./type";
import { useRef } from "react";
import useRotateOnHover from "./useRotateOnHover";

type ThreeExternalMeshProps  = Object3D<Object3DEventMap> & { geometry: THREE.BufferGeometry };

const ThreeExternalMesh = ({position}: { position: VECTOR }) => {
    const meshRef = useRef<THREE.Mesh | null>(null);
    const externalMesh= useGLTF("/material.glb");
    const {onPointerEnter, onPointerLeave} =  useRotateOnHover(meshRef, 0.5);
    const meshNode = externalMesh.nodes["아이코스피어"] as ThreeExternalMeshProps;
    return (
        <mesh onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} ref={meshRef} position={position} geometry={meshNode.geometry} material={externalMesh.materials[""]} material-color= "#ff3300" >
            
            </mesh>
    );
}

export default ThreeExternalMesh;