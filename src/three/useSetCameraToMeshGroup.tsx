"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function useSetCameraToMeshGroup(box: THREE.Box3 | null = null) {
  const { camera } = useThree();

  useEffect(() => {
    if (box) {
      setTimeout(() => {
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxSize = Math.max(size.x, size.y, size.z);
        const cameraDistance = maxSize / (2 * Math.tan(75));

        const finalDistance = cameraDistance * 1.5;

        const direction = new THREE.Vector3(1, 0.5, -1).normalize();
        camera.position
          .copy(center)
          .add(direction.multiplyScalar(finalDistance));
        camera.lookAt(center);
        camera.updateProjectionMatrix();
      }, 200);
    }
  }, [camera, box]);
}
