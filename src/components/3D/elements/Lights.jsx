import { memo, useEffect, useRef } from "react";
import { useControls, folder } from "leva";
import { CameraHelper } from "three";
import { useHelper } from "@react-three/drei";

/**
 * Creates and controls the lights in the scene.
 *
 * @return {JSX.Element} The lights group component.
 */


function Lights() {
 

  const { helper, cameraSize, shadowFar, ...dLightBinding } = useControls(
    "Directional Light",
    {
      intensity: {
        value: 1.25,
        min: 0,
        max: 5,
        step: 0.05,
        label: "intensity"
      },
      position: { value: [3.5, 3, 0] },
      helper: false,
      cameraSize: { value: 3, label: "Size" },
      shadowFar: { value: 9, label: "Far" }
    },
    { collapsed: true }
  );

  const aLightBinding = useControls(
    "Ambiant Light",
    {
      intensity: {
        value: 0.5,
        min: 0,
        max: 5,
        step: 0.05,
        label: "intensity"
      }
    },
    { collapsed: true }
  );

  /////////////////////////////////////////////////////////////////////////////////////
  // Light References and Helper
  /////////////////////////////////////////////////////////////////////////////////////
  const dLight = useRef();
  const dCamera = useRef();
  useEffect(() => {
    dCamera.current = dLight.current ? dLight.current.shadow.camera : null;
  }, [dLight]);
  useHelper(helper && dCamera, CameraHelper, 1, "hotpink");

  return (
    <group>
      <ambientLight {...aLightBinding} />
      <directionalLight
        ref={dLight}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={shadowFar}
        shadow-camera-left={-cameraSize}
        shadow-camera-right={cameraSize}
        shadow-camera-top={cameraSize}
        shadow-camera-bottom={-cameraSize}
        shadow-bias={-0.005}
        shadow-radius={1}
        {...dLightBinding}
      />
    </group>
  );
}

export default memo(Lights);
