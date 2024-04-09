import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Stars, CameraControls } from "@react-three/drei";
import { useControls, button } from "leva";

import Lights from "../elements/Lights";
import Labels from "../elements/Labels";
import { useCameraControls } from "../../../hooks/useCameraControls";
import { Space } from "../";

export function Scene3D() {
  const cameraRef = useRef();
  const setCameraRef = useCameraControls((s) => s.setCameraRef);
  useEffect(() => setCameraRef(cameraRef), [cameraRef, setCameraRef]);

  // Leva contols
  const saveCameraPos = useCameraControls((state) => state.saveCameraPos);

  useControls({
    "Copy current view for areaData": button(() => saveCameraPos()),
  });

  return (
    <Canvas dpr={[1, 2]} shadows camera={{ position: [1.845, 1.229, 4.68] }}>
      <Lights />
      <CameraControls ref={cameraRef} />
      <Suspense fallback={null}>
        <Bounds margin={1.2}>
          <Space scale={10} />
          <Labels />
        </Bounds>
        <Stars radius={50} count={900} fade speed={0.5} />
      </Suspense>
    </Canvas>
  );
}
